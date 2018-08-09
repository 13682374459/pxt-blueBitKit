#include "pxt.h"
#include <math.h>

using namespace pxt;

namespace blueBitKit
{

#define SHT20_ADDR (0x40 << 1)
#define BH1750_ADDR (0x23 << 1)
#define Ultrasonic_ADDR (0x0b << 1)
#define Color_ADDR (0x0a << 1)

const char SHT20_TMP = 0xE3;
const char SHT20_HUM = 0xE5;
const char BH1750_CMD = 0x10;
const char Ultrasonic_CMD = 0x01;

//SegDigits
uint8_t tubeTab[] = {0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F,
                     0x6F, 0x77, 0x7C, 0x39, 0x5E, 0x79, 0x71, 0x00, 0x40};

//led matrix
#define HT16K33_ADDR (0x70 << 1)

const char HT16K33_BLINK_CMD = 0x80;
const char HT16K33_BLINK_DISPLAYON = 0x01;
const char HT16K33_BLINK_OFF = 0;
const char HT16K33_BLINK_2HZ = 1;
const char HT16K33_BLINK_1HZ = 2;
const char HT16K33_BLINK_HALFHZ = 3;
const char HT16K33_CMD_BRIGHTNESS = 0xE0;

//IO extend
#define IOEXTEND_ADDR (0x20 << 1)

//LCD 1602 display
#define LCD_ADDR (0x18 << 1)
const char LCD_CLEARDISPLAY = 0x01;
const char LCD_RETURNHOME = 0x02;
const char LCD_ENTRYMODESET = 0x04;
const char LCD_DISPLAYCONTROL = 0x08;
const char LCD_CURSORSHIFT = 0x10;
const char LCD_FUNCTIONSET = 0x20;
const char LCD_SETCGRAMADDR = 0x40;
const char LCD_SETDDRAMADDR = 0x80;
//flags for display entry mode
const char LCD_ENTRYRIGHT = 0x00;
const char LCD_ENTRYLEFT = 0x02;
const char LCD_ENTRYSHIFTINCREMENT = 0x01;
const char LCD_ENTRYSHIFTDECREMENT = 0x00;
//flags for display on/off control
const char LCD_DISPLAYON = 0x04;
const char LCD_DISPLAYOFF = 0x00;
const char LCD_CURSORON = 0x02;
const char LCD_CURSOROFF = 0x00;
const char LCD_BLINKON = 0x01;
const char LCD_BLINKOFF = 0x00;
//flags for display/cursor shift
const char LCD_DISPLAYMOVE = 0x08;
const char LCD_CURSORMOVE = 0x00;
const char LCD_MOVERIGHT = 0x04;
const char LCD_MOVELEFT = 0x00;
//flags for function set
const char LCD_8BITMODE = 0x10;
const char LCD_4BITMODE = 0x00;
const char LCD_2LINE = 0x08;
const char LCD_1LINE = 0x00;
const char LCD_5x10DOTS = 0x04;
const char LCD_5x8DOTS = 0x00;

char _displayfunction = LCD_8BITMODE | LCD_2LINE | LCD_5x8DOTS;
char _row_offsets[] = {0, 0, 0, 0};
char _displaymode = LCD_ENTRYLEFT | LCD_ENTRYSHIFTDECREMENT;
char _displaycontrol = LCD_DISPLAYON | LCD_CURSOROFF | LCD_BLINKOFF;

//%
int _HumiTemp(char index)
{
    char buf[2];

    switch (index)
    {
    case 1:
    {
        uBit.i2c.write(SHT20_ADDR, (char *)&SHT20_TMP, 1, false);
        uBit.sleep(85);
        uBit.i2c.read(SHT20_ADDR, buf, 2, false);
        return round(-46.86 + 175.72 * (buf[0] * 256 + buf[1]) / 65535);
    }
    break;

    case 2:
    {
        uBit.i2c.write(SHT20_ADDR, (char *)&SHT20_HUM, 1, false);
        uBit.sleep(40);
        uBit.i2c.read(SHT20_ADDR, buf, 2, false);
        return round(-6 + 125 * (buf[0] * 256 + buf[1]) / 65536);
    }
    break;

    default:
        break;
    }
}

//%
int _getLight()
{
    char buf[2];
    uBit.i2c.write(BH1750_ADDR, (char *)&BH1750_CMD, 1, false);
    uBit.sleep(120);
    uBit.i2c.read(BH1750_ADDR, buf, 2, false);
    uBit.sleep(10);
    return (buf[0] * 256 + buf[1])/1.2;
}
//%
int _getDistance()
{
    char buf[2];
    uBit.i2c.write(Ultrasonic_ADDR, (char *)&Ultrasonic_CMD, 1, false);
    uBit.sleep(2);
    uBit.i2c.read(Ultrasonic_ADDR, buf, 2, false);
    return round((buf[0] + buf[1] * 256) / 10);
}

int _max(int x, int y, int z)
{
    int max = x > y ? x : y;
    max = max > z ? max : z;
    return max;
}

//%
uint8_t _ColorSensor(char index)
{
    char color[3];
    char buf[6];
    char cmd_1 = 0x01;
    char cmd_2 = 0x02;
    char cmd_3 = 0x03;
    char state;
    uBit.i2c.write(Color_ADDR, (char *)&cmd_1, 1, false);
    uBit.sleep(100);
    uBit.i2c.write(Color_ADDR, (char *)&cmd_2, 1, false);
    uBit.i2c.read(Color_ADDR, &state, 1, false);

    if (state == 3)
    {
        uBit.i2c.write(Color_ADDR, (char *)&cmd_3, 1, false);
        uBit.i2c.read(Color_ADDR, buf, 6, false);

        color[0] = buf[5] * 256 + buf[4]; //color red
        color[1] = buf[1] * 256 + buf[0]; //color green
        color[2] = buf[3] * 256 + buf[2]; //color blue
        char maxColor = _max(color[0], color[1], color[2]);

        if (maxColor > 255)
        {
            char scale = 255 / maxColor;
            color[0] = int(color[0] * scale);
            color[1] = int(color[1] * scale);
            color[2] = int(color[2] * scale);
        }
    }

    switch (index)
    {
    case 1:
        return color[0];
        break;
    case 2:
        return color[1];
        break;
    case 3:
        return color[2];
        break;
    default:
        break;
    }
}

//%
void tm1650Init()
{
    char cmd = 0x01;
    uBit.i2c.write((0x24 << 1), (char *)&cmd, 1, false);
}

//%
void tm1650Clear()
{
    for (uint8_t i = 0; i < 4; i++)
    {
        uBit.i2c.write(((0x34 + i) << 1), (char *)&tubeTab[0x10], 1, false);
    }
}

void tm1650DisplayUint(uint16_t num)
{
    char temp[4];

    num = (num < 10000) ? num : 9999;
    temp[3] = num % 10;
    temp[2] = (num / 10) % 10;
    temp[1] = (num / 100) % 10;
    temp[0] = (num / 1000) % 10;
    if (num < 1000)
    {
        temp[0] = 0x10;
        if (num < 100)
        {
            temp[1] = 0x10;
            if (num < 10)
            {
                temp[2] = 0x10;
            }
        }
    }

    for (uint8_t i = 0; i < 4; i++)
    {
        uBit.i2c.write(((0x34 + i) << 1), (char *)&tubeTab[temp[i]], 1, false);
    }
}

//%
void tm1650DisplayInt(int value)
{
    int temp;
    value = round(value);

    if (value >= 0)
    {
        tm1650DisplayUint(value);
    }
    else
    {
        temp = (value > -999) ? value : -999;
        temp = fabs(temp);
        tm1650DisplayUint(temp);
        if (temp < 10)
        {
            uBit.i2c.write((0x36 << 1), (char *)&tubeTab[0x11], 1, false);
        }
        else if (temp < 100)
        {
            uBit.i2c.write((0x35 << 1), (char *)&tubeTab[0x11], 1, false);
        }
        else if (temp < 1000)
        {
            uBit.i2c.write((0x34 << 1), (char *)&tubeTab[0x11], 1, false);
        }
    }
}

//%
int _getLM35(int value)

{
    return round(value * (3 / 10.24));
}

//%
int _getNTC(int value)
{
    return round(1.0 / (log(1023.0 / value - 1) / 3955.0 + 1 / 298.0) - 273.0);
}

// LED matrix module

void HT16K33SetBrightness(uint8_t brightness)
{
    uint8_t b = brightness;
    if (b > 15)
    {
        b = 15;
    }
    char var = HT16K33_CMD_BRIGHTNESS | b;
    uBit.i2c.write(HT16K33_ADDR, (char *)&var, 1, false);
}

void HT16K33BlinkRate(uint8_t rate)
{
    uint8_t r = rate;
    if (r > 3)
    {
        r = 0;
    }
    r <<= 1;
    char var = HT16K33_BLINK_CMD | HT16K33_BLINK_DISPLAYON | r;
    uBit.i2c.write(HT16K33_ADDR, (char *)&var, 1, false);
}
//%
void HT16K33Init()
{
    char CMD_init = 0x21;
    uBit.i2c.write(HT16K33_ADDR, (char *)&CMD_init, 1, false);
    HT16K33BlinkRate(HT16K33_BLINK_OFF);
    HT16K33SetBrightness(15);
}

//%
void HT16K33Clear()
{

    char var[17];
    var[0] = 0;
    for (uint8_t i = 0; i < 17; i++)
    {
        var[i] = 0;
    }
    uBit.i2c.write(HT16K33_ADDR, (char *)&var, 17, false);
}

// IO extend
//%
void extIOInit(uint8_t pin, char mode)
{
    char cmd = 0x03;
    char mode_old[1];
    uBit.i2c.write(IOEXTEND_ADDR, (char *)&cmd, 1, false);
    uBit.i2c.read(IOEXTEND_ADDR, mode_old, 1, false);
    char mode_new[] = {0};
    if (mode == 1)
    {
        mode_new[0] = mode_old[0] | (1 << pin);
    }
    else if (mode == 0)
    {
        mode_new[0] = mode_old[0] & (~(1 << pin));
    }
    char var[] = {0x03, mode_new[0]};
    uBit.i2c.write(IOEXTEND_ADDR, (char *)&var, 2, false);
}

//%
int readExtendedIO(uint8_t pin)
{
    char cmd = 0;
    char buf[4];
    uBit.i2c.write(IOEXTEND_ADDR, (char *)&cmd, 1, false);
    uBit.i2c.read(IOEXTEND_ADDR, buf, 4, false);
    return (buf[0] >> pin) & 0x01;
}

//%
void writeExtendedIO(uint8_t pin, char output)
{
    char cmd = 1;
    char stat_old[3];

    uBit.i2c.write(IOEXTEND_ADDR, (char *)&cmd, 1, false);
    uBit.i2c.read(IOEXTEND_ADDR, stat_old, 3, false);
    char stat_new[] = {0};
    if (output == 1)
    {
        stat_new[0] = stat_old[0] | (1 << pin);
    }
    else if (output == 0)
    {
        stat_new[0] = stat_old[0] & (~(1 << pin));
    }
    char var[] = {0x01, stat_new[0]};
    uBit.i2c.write(IOEXTEND_ADDR, (char *)&var, 2, false);
}

// lcd 1602 function

//非用户调用函数

void sendCommand(char cmd)
{
    char command[] = {0x01, cmd};
    uBit.i2c.write(LCD_ADDR, (char *)&command, 2, false);
    uBit.sleep(1);
}

void sendCharacter(char c)
{
    char character[] = {0x02, c};
    uBit.i2c.write(LCD_ADDR, (char *)&character, 2, false);
    uBit.sleep(1);
}

//关显示
void lcdNoDisplay()
{
    _displaycontrol &= ~LCD_DISPLAYON;
    sendCommand(LCD_DISPLAYCONTROL | _displaycontrol);
}
//开显示
void lcdDisplay()
{

    _displaycontrol |= LCD_DISPLAYON;
    sendCommand(LCD_DISPLAYCONTROL | _displaycontrol);
}
// //设置行偏移

void setRowOffsets(char row0, char row1, char row2, char row3)
{
    _row_offsets[0] = row0;
    _row_offsets[1] = row1;
    _row_offsets[2] = row2;
    _row_offsets[3] = row3;
}

//清屏
//%
void lcdClear()
{
    sendCommand(LCD_CLEARDISPLAY);
    uBit.sleep(1);
}

//设置光标位置
//%
void lcdSetCursor(uint8_t col, uint8_t row)
{
    sendCommand(LCD_SETDDRAMADDR | (col + _row_offsets[row]));
}

//消隐光标
void lcdNoCursor()
{
    _displaycontrol &= ~LCD_CURSORON;
    sendCommand(LCD_DISPLAYCONTROL | _displaycontrol);
}

// 显示光标
void lcdCursor()
{
    _displaycontrol |= LCD_CURSORON;
    sendCommand(LCD_DISPLAYCONTROL | _displaycontrol);
}
//光标不闪烁
void lcdNoBlink()
{
    _displaycontrol &= ~LCD_BLINKON;
    sendCommand(LCD_DISPLAYCONTROL | _displaycontrol);
}
//光标闪烁
void lcdBlink()
{
    _displaycontrol |= LCD_BLINKON;
    sendCommand(LCD_DISPLAYCONTROL | _displaycontrol);
}

//左滚动显示
void lcdScrollDisplayLeft()
{
    sendCommand(LCD_CURSORSHIFT | LCD_DISPLAYMOVE | LCD_MOVELEFT);
}

//右滚动显示
void lcdScrollDisplayRight()
{
    sendCommand(LCD_CURSORSHIFT | LCD_DISPLAYMOVE | LCD_MOVERIGHT);
}

//%
void lcdScrollDisplay(int index)
{
    if (index == 0)
    {
        lcdScrollDisplayLeft();
    }
    if (index == 1)
    {
        lcdScrollDisplayRight();
    }
}
//字符串流从左到右
void lcdLeftToRight()
{
    _displaymode |= LCD_ENTRYLEFT;
    sendCommand(LCD_ENTRYMODESET | _displaymode);
}

// 字符串流从右到左
void lcdRightToLeft()
{
    _displaymode &= ~LCD_ENTRYLEFT;
    sendCommand(LCD_ENTRYMODESET | _displaymode);
}

// 以光标位置为起点，将显示字符往左挤
void lcdAutoscroll()
{
    _displaymode |= LCD_ENTRYSHIFTINCREMENT;
    sendCommand(LCD_ENTRYMODESET | _displaymode);
}

//取消往左挤，恢复正常显示方式（即往右显示字符）
void lcdNoAutoscroll()
{
    _displaymode &= ~LCD_ENTRYSHIFTINCREMENT;
    sendCommand(LCD_ENTRYMODESET | _displaymode);
}
//制作用户自定义
void lcdCreateChar(char location, char charmap[8])
{
    char _location = location & 0x7;
    sendCommand(LCD_SETCGRAMADDR | (_location << 3));
    for (uint8_t i = 0; i < 8; i++)
    {
        sendCharacter(charmap[i]);
    }
}

//光标返回屏幕原点
void lcdHome()
{
    sendCommand(LCD_RETURNHOME);
    uBit.sleep(1);
}

//%
void lcdInit()
{
    setRowOffsets(0x00, 0x40, (0x00 + 16), (0x40 + 16));
    uBit.sleep(50);
    lcdDisplay();
    lcdClear();
    sendCommand(LCD_ENTRYMODESET | _displaymode);
}

//%
void SerialRedirect(int tx, int rx, int rate)
{
    MicroBitPin *txp = getPin(tx);
    if (!txp)
        return;
    MicroBitPin *rxp = getPin(rx);
    if (!rxp)
        return;

    uBit.serial.redirect(txp->name, rxp->name);
    uBit.serial.baud((int)rate);
}

//%
void writeString(StringData *text) {
    if (!text) return;

    uBit.serial.send(ManagedString(text));
    }
}
