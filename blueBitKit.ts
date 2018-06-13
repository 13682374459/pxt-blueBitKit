/*
 * @file blueBit Kit 
 * @brief Laplus's blueBit Kit makecode library.
 * 
 * @more info see:(http://wiki.labplus.cn/index.php?title=bluebit)
 * @copyright	[Labplus](http://wiki.labplus.com), 2018
 * @copyright	GNU Lesser General Public License
 * @author [tangliufeng]
 * @date  2018.4.13
 */




enum joyButton {
    //% block="A Button"
    A_Button = 1,
    //% block="B Button"
    B_Button = 2,
    //% block="C Button"
    C_Button = 3,
    //% block="D Button"
    D_Button = 4
};

enum SHT20 {
    //%block="temperature"
    temperature = 1,
    //%block="humidity"
    humidity = 2

};

enum ColorSensor {
    //%block="red"
    red = 1,
    //%block="green"
    green = 2,
    //%block="blue"
    blue = 3,

};


enum extendIO {
    //%block="P0"
    P0 = 0,
    //%block="P1"
    P1 = 1,
    //%block="P2"
    P2 = 2,
    //%block="P3"
    P3 = 3,
    //%block="P4"
    P4 = 4,
    //%block="P5"
    P5 = 5,
    //%block="P6"
    P6 = 6,
    //%block="P7"
    P7 = 7
};

enum extendIOMode {
    //%block="outpout"
    outpout = 0,
    //%block="inpout"
    inpout = 1
};

enum Scroll {
    //%block="left"
    left = 0,
    //%block="right"
    right = 1
};

enum MIDI_Note {
    //%block="off"
    OFF = 0,
    //%block="on"
    ON = 1
};

enum ComMon {
    //%block="off"
    OFF = 0,
    //%block="on"
    ON = 1
};

enum Rec_Play {
    //%block="rec"
    rec = 0,
    //%block="play"
    play = 1
};


/**
 * Functions for blueBit Kit 
 */
//% weight=10 color=#8A2BE2 icon="\uf042" block="blueBitKit"
namespace blueBitKit {


    let INITPIN = false;
    let LEDFREE = false;


    function init_pin(): void {
        pins.setPull(DigitalPin.P0, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P1, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P2, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P8, PinPullMode.PullNone);
    }

    function ledPinfree(): void {

        led.enable(false);
        pins.setPull(DigitalPin.P3, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P4, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P6, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P7, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P9, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P10, PinPullMode.PullNone);


    }

    function ifledPin(pin: number): boolean {
        if (DigitalPin.P3 || DigitalPin.P4 || DigitalPin.P6 || DigitalPin.P7
            || DigitalPin.P9 || DigitalPin.P10) {
            return true;
        }
        else
            return false;
    }

    /**
     * 
     * 
     */
    //% blockId=Button_Press block="ButtonPress by|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=90
    //% blockGap=15
    export function ButtonPress(pin: DigitalPin): number {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }

        }
        return pins.digitalReadPin(pin);

    }

    /**
     * 
     * 
     */
    //% blockId=infrared_is_triggered block="Triggered the infrared proximity sensor by|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=90
    //% blockGap=15
    export function infraredIsTriggered(pin: DigitalPin): number {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }

        }
        return pins.digitalReadPin(pin);

    }	
	
	/**
     * 
     * 
     */
    //% blockId=sound_is_triggered block="sound sensor is triggered in|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=90
    //% blockGap=15
    export function soundIsTriggered(pin: DigitalPin): number {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }

        }
        return pins.digitalReadPin(pin);

    }

	/**
     * 
     * 
     */
    //% blockId=Track_is_Dark block="Track sensor detected black in|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=90
    //% blockGap=15
    export function TrackIsDark (pin: DigitalPin): number {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }

        }
        return pins.digitalReadPin(pin);

    }
	
	/**
     * 
     * 
     */
    //% blockId=shockSensor_is_Triggered block="Shock Sensor is triggered in|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=90
    //% blockGap=15
    export function shockSensor (pin: DigitalPin): number {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }

        }
        return pins.digitalReadPin(pin);
		
    }
	
	/**
     * 
     * 
     */
    //% blockId=get_Rfid block="Get the Rfid in|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=90
    //% blockGap=15
    export function getRfid (pin: DigitalPin): number {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }

        }
        return pins.digitalReadPin(pin);
		
    }	
	
	/**
     * 
     * 
     */
    //% blockId=finger_Print block="Fingerprint verification passed in|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=90
    //% blockGap=15
    export function fingerPrint (pin: DigitalPin): number {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }

        }
        return pins.digitalReadPin(pin);
		
    }	
	
	/**
     * 
     * 
     */
    //% blockId=Human_Infrared block="Human Infrared sensor is triggered in|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=90
    //% blockGap=15
    export function HumanInfrared (pin: DigitalPin): number {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }

        }
        return pins.digitalReadPin(pin);
		
    }	
	
	/**
     * 
     * 
     */
    //% blockId=magnetic_Switch block="Magnetic switch is triggered in|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=90
    //% blockGap=15
    export function magneticSwitch (pin: DigitalPin): number {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }

        }
        return pins.digitalReadPin(pin);
		
    }	
		
    /**
        * @param pin , eg: P0
        * @param value , eg: 1
        */
    //% blockId=usbSwitch block="In|%pin|USB switch ON_OFF|%value"
    //% value.min=0 value.max=1
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=89
    //% blockGap=15
    export function usbSwitch(pin: DigitalPin, value: number): void {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
        }
        return pins.digitalWritePin(pin, value);
    }
		
    /**
        * @param pin , eg: P0
        * @param value , eg: 1
        */
    //% blockId=FanSwitch block="In|%pin|Fan switch ON_OFF|%value"
    //% value.min=0 value.max=1
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=89
    //% blockGap=15
    export function FanSwitch(pin: DigitalPin, value: number): void {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
        }
        return pins.digitalWritePin(pin, value);	
    }
		
    /**
        * @param pin , eg: P0
        * @param index , eg: ComMon.ON
        */
    //% blockId=LaserSwitch block="In|%pin|Laser ON_OFF|%value"
    //% value.min=0 value.max=1
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=89
    //% blockGap=15
    export function LaserSwitch(pin: DigitalPin, value: number): void {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
        }
        return pins.digitalWritePin(pin, value);	
    }
   
       /**
        * Rec_or_Play module.
        * @param status Rec or Play, eg: Rec_Play.rec 
        * @param rec P0~P20, eg: 0
        * @param play P0~P20, eg: 1
        */
    //% blockId=Rec_or_Play block="Recorder|%status|in RecPin|%rec|and PlayPin|%play"
    //% status.fieldEditor="gridpicker" status.fieldOptions.columns=3 status.fieldOptions.width="300" 
    //% rec.fieldEditor="gridpicker" rec.fieldOptions.columns=3 rec.fieldOptions.width="300" 
    //% play.fieldEditor="gridpicker" play.fieldOptions.columns=3 play.fieldOptions.width="300" 
    //% weight=58
    //% blockGap=15
    export function Rec_or_Play(status: Rec_Play, rec:DigitalPin, play: DigitalPin): void {
        //import { writeDigital } from "./blueBitKit";

        //let writeDigital = new writeDigital();

        if (status == 1) {
            pins.digitalWritePin(rec,0); 
            pins.digitalWritePin(play,1);
        }
        if (status == 0) {
            pins.digitalWritePin(rec,1);
            pins.digitalWritePin(play,0);
        }
        return; //实测：pins.digitalWritePin()换成writeDigital()来return无效
    }               //结论: 要return属性(附参数) 不能写了函数直接return
   

    /**
     * 
     * 
     */
    //% blockId=read_digital block="bule:bit readDigital|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=90
    //% blockGap=15
    export function readDigital(pin: DigitalPin): number {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }

        }
        return pins.digitalReadPin(pin);

    }

    /**
     * 
     * 
     */
    //% blockId=write_digital block="bule:bit writeDigital pin|%pin|to|%value"
    //% value.min=0 value.max=1
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=89
    //% blockGap=15
    export function writeDigital(pin: DigitalPin, value: number): void {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
        }
        return pins.digitalWritePin(pin, value);

    }
	
	
	
    /**
       * read analog pin only pin0/1/2/3/4/10
       * 
       */
    //% blockId=read_analog block="bule:bit read analog|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=88
    //% blockGap=15
    export function readAnalog(pin: AnalogPin): number {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }

        }
        return pins.analogReadPin(pin);

    }

    /**
     * 
     * 
     */
    //% blockId=write_analog block="bule:bit writeAnalog pin|%pin|to|%value"
    //% value.min=0 value.max=1023
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=87
    //% blockGap=40
    export function writeAnalog(pin: AnalogPin, value: number): void {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }
        }
        return pins.analogWritePin(pin, value);
    }


    //% shim=blueBitKit::_getNTC
    function _getNTC(value: number) {
        // Dummy implementation for the simulator.
        return 0;
    }

    /**
       * blue:bit- NTC Temp module.
       * return temperature,unit C.
       */
    //% blockId=getNTC block="get NTCTemp|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=85
    //% blockGap=15
    export function getNTC(pin: AnalogPin): number {
        return _getNTC(readAnalog(pin));
    }

    /**
         * blue:bit-joy Button module.
         * have A/B/C/D button,return 'true' if pressed; return'false' if not.
         * read analog pin only pin0/1/2/3/4/10.
         */
    //% blockId=joyButtonVal block="joyButton|%button|is pressed|pin|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% button.fieldEditor="gridpicker" button.fieldOptions.width=300  button.fieldOptions.columns=2
    //% weight=84
    //% blockGap=15
    export function joyButtonVal(button: joyButton, pin: AnalogPin): boolean {
        if (!INITPIN) {
            init_pin();
            INITPIN = true;
        }
        if (ifledPin(pin)) {
            if (!LEDFREE) {
                ledPinfree();
                LEDFREE = true;
            }

        }
        let status = false;
        let val = readAnalog(pin);

        switch (button) {
            case 1: if (val < 51) {
                status = true;
            } break;
            case 2: if (val > 199 && val < 301) {
                status = true;
            } break;
            case 3: if (val > 449 && val < 551) {
                status = true;
            } break;
            case 4: if (val > 669 && val < 801) {
                status = true;
            } break;

            default:
                break;
        }
        return status;

    }

    //% shim=blueBitKit::_getLM35
    function _getLM35(value: number) {
        // Dummy implementation for the simulator.
        return 0;
    }

    /**
       * blue:bit- LM35 Temp module.
       * return temperature,unit ?.
       * read analog pin only pin0/1/2/3/4/10.
       */
    //% blockId=getLM35Temp block="get LM35Temp pin|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4 pin.fieldOptions.width="300" 
    //% weight=83
    //% blockGap=15

    export function getLM35Temp(pin: AnalogPin): number {

        return _getLM35(readAnalog(pin));

    }

    /**
      *  blue:bit- HUMI&Temp module.
      *  return temperature(unit C ) and humidity (unit %).
      *  pin:I2C.
      */
    //% blockId=getHumiTemp block="get HumiTemp|%index"
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=1 index.fieldOptions.width="200" 
    //% weight=82
    //% blockGap=15
    //% shim=blueBitKit::_HumiTemp
    export function getHumiTemp(index: SHT20): number {
        // Fake function for simulator
        return 0;
    }



    /**
      *  blue:bit- Ambient Light module.
      *  return LightValue(unit lux ).
      *  pin:I2C
      */
    //% blockId=getAmbientLight block="get AmbientLight (lux)"
    //% weight=81
    //% blockGap=15
    //% shim=blueBitKit::_getLight
    export function getAmbientLight(): number {
        // Fake function for simulator
        return 0;
    }


    /**
      *  blue:bit- ultrasonic module.
      *  return distance(unit cm ).
      *  pin:I2C
      */
    //% blockId=Ultrasonic block="get Ultrasonic (cm)"
    //% weight=80
    //% blockGap=15
    //% shim=blueBitKit::_getDistance
    export function Ultrasonic(): number {
        // Fake function for simulator
        return 0;
    }




    /**
      *  blue:bit- Color module.
      *  return red/green/blue ColorValue,Rang 0~255.
      *  pin:I2C.
      */
    //% blockId=ColorSensor block="get ColorSensor|%index"
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=3 index.fieldOptions.width="300" 
    //% weight=79
    //% blockGap=50
    //% shim=blueBitKit::_ColorSensor
    export function ColorSensor(index: ColorSensor): number {
        // Fake function for simulator
        return 0;
    }


    /**
     *  blue:bit- 4x7 SEG Display module.
     *  display 4 Digits initialize.use SegDigits display before must be init.
     *  pin:I2C
     * 
     */
    //% blockId=SegDigitsInit block="SegDigits initialize"
    //% weight=77
    //% blockGap=15
    //% shim=blueBitKit::tm1650Init
    export function SegDigitsInit(): void {

        // Fake function for simulator
        return;
    }




    /**
     *  blue:bit- 4x7 SEG Display module.
     *  display 4 Digits
     *  pin:I2C
     *  @param num    eg:8888
     */
    //% blockId=SegDigits_ block="SegDigits Display|%num"
    //% weight=76
    //% blockGap=15
    //% shim=blueBitKit::tm1650DisplayInt
    export function SegDigits_(num: number): void {

        // Fake function for simulator
        return;
    }



    /**
     *  blue:bit- 4x7 SEG Display module.
     *  display 4 Digits Clear
     *  pin:I2C
     * 
     */
    //% blockId=SegDigitsClear block="SegDigits Clear"
    //% weight=75
    //% blockGap=30
    //% shim=blueBitKit::tm1650Clear
    export function SegDigitsClear(): void {

        // Fake function for simulator
        return;
    }


    /**
    *  blue:bit- 8x8 LED matrix  module.
    *   8x8 LED matrix initialize
    *  pin:I2C
    * 
    */
    //% blockId=ledMatrixInit block="LED Matrix initialize "
    //% weight=73
    //% blockGap=15
    //% shim=blueBitKit::HT16K33Init
    export function ledMatrixInit(): void {

        // Fake function for simulator
        return;
    }

    /**
         *  blue:bit- 8x8 LED matrix  module.
         *   8x8 LED matrix Clear
         *  pin:I2C
         * 
         */
    //% blockId=ledMatrixClear block="LED Matrix Clear "
    //% weight=72
    //% blockGap=15
    //% shim=blueBitKit::HT16K33Clear
    export function ledMatrixClear(): void {

        // Fake function for simulator
        return;
    }

    /**
       *  blue:bit- 8x8 LED matrix  module.
       *  8x8 LED matrix display
       *  use arrays.number[255,255,255,255,255,255,255,255]
       *  pin:I2C
       * 
       */
    //% blockId=ledMatrx block="LED Matrix|%arrays"
    //% weight=71
    //% blockGap=40
    export function ledMatrx(arrays: number[]): void {

        if (!arrays) return;

        let buf = pins.createBuffer(17);
        buf[0] = 0;
        for (let i = 0; i < 8; i++) {
            buf[i * 2 + 1] = arrays[i];
        }
        pins.i2cWriteBuffer(0x70, buf);
    }


    /**
     *  blue:bit- IO extend module.
     *  control by i2c can extend eight IO
     *  pin:I2C
     *  @param pin P0~P7; eg: P0
     *  @param mode input/output; eg: output
     */
    //% blockId=extIO_pinMode block="extendIO pinMode|%pin|mode|%mode"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=3 pin.fieldOptions.width="300" 
    //% mode.fieldEditor="gridpicker" mode.fieldOptions.columns=1 mode.fieldOptions.width="200" 
    //% weight=70
    //% blockGap=15
    //% shim=blueBitKit::extIOInit
    export function extIO_pinMode(pin: extendIO, mode: extendIOMode): void {

        // Fake function for simulator
        return;
    }



    /**
     *  blue:bit- IO extend module.
     *  control by i2c can extend eight IO
     *  pin:I2C
     *  @param pin P0~P7; eg: P0
     * 
     */
    //% blockId=readExtIO block="readExtIO|pin|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=3 pin.fieldOptions.width="300" 
    //% weight=69
    //% blockGap=15
    //% shim=blueBitKit::readExtendedIO
    export function readExtIO(pin: extendIO): number {

        // Fake function for simulator
        return 0;
    }

    /**
        *  blue:bit- IO extend module.
        *  control by i2c can extend eight IO
        *  pin:I2C
        *  @param pin P0~P7; eg: P0
        * 
        */
    //% blockId=writeExtIO block="writeExtIO|pin|%pin|to|%value"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=3 pin.fieldOptions.width="300" 
    //% value.min=0 value.max=1
    //% weight=68
    //% blockGap=40
    //% shim=blueBitKit::writeExtendedIO
    export function writeExtIO(pin: extendIO, value: number): void {

        // Fake function for simulator
        return;
    }

    /**
       *  blue:bit-  lcd1602 module.
       *  lcd1602 initialize
       *  pin:I2C
       * 
       */
    //% blockId=lcd1602Init block="lcd1602 initialize"
    //% weight=67
    //% blockGap=15
    //% shim=blueBitKit::lcdInit
    export function lcd1602Init(): void {

        // Fake function for simulator
        return;
    }

    /**
         *  blue:bit-  lcd1602 module.
         *  lcd1602 SetCursor col:0~15.row:0~1
         *  pin:I2C
         *  
         */
    //% blockId=lcd1602SetCursor block="lcd1602 SetCursor|col|%col|row|%row"
    //% col.min=0 col.max=15
    //% row.min=0 row.max=1
    //% weight=66
    //% blockGap=15
    //% shim=blueBitKit::lcdSetCursor
    export function lcd1602SetCursor(col: number, row: number): void {

        // Fake function for simulator
        return;
    }

    /**
       *  blue:bit-  lcd1602 module.
       *  lcd1602 print string
       *  pin:I2C
       *  @param text print string; eg:hello!
       */
    //% blockId=lcd1602Print block="lcd1602 print|%text"
    //% weight=65
    //% blockGap=15
    export function lcd1602Print(text: string): void {

        for (let i = 0; i < text.length; i++) {
            let buf = pins.createBuffer(2);
            buf.setNumber(NumberFormat.UInt8BE, 0, 0x02);
            buf.setNumber(NumberFormat.UInt8BE, 1, text.charCodeAt(i));
            pins.i2cWriteBuffer(0x18, buf);
            //serial.writeString(text[i]);
        }
    }



    /**
    *  blue:bit-  lcd1602 module.
    *  lcd1602 Clear
    *  pin:I2C
    * 
    */
    //% blockId=lcd1602Clear block="lcd1602 Clear"
    //% weight=64
    //% blockGap=15
    //% shim=blueBitKit::lcdClear
    export function lcd1602Clear(): void {

        // Fake function for simulator
        return;
    }

    
 /**
    *  blue:bit-  lcd1602 module.
    *  lcd1602 Scroll
    *  pin:I2C
    * 
    */
    //% blockId=lcd1602Scroll block="lcd1602Scroll|%index"
    //% weight=64
    //% blockGap=40
    //% shim=blueBitKit::lcdScrollDisplay
    export function lcd1602Scroll(index:Scroll): void {

        // Fake function for simulator
        return;
    }



    /**
     *  SerialRedirect
     * @param tx the new transmission pin, eg: DigitalPin.P1
     * @param rx the new reception pin, eg: DigitalPin.P0
     * @param rate the new baud rate. eg: 115200
     */
    //% blockId=SerialRedirect block="SerialRedirect|TX %tx|RX %rx|at baud rate %rate"
    //% tx.fieldEditor="gridpicker" tx.fieldOptions.columns=3 tx.fieldOptions.width="300" 
    //% rx.fieldEditor="gridpicker" rx.fieldOptions.columns=3 rx.fieldOptions.width="300" 
    //% rate.fieldEditor="gridpicker" rate.fieldOptions.columns=3 rate.fieldOptions.width="300" 
    //% weight=62
    //% blockGap=15
    //% shim=blueBitKit::SerialRedirect
    export function SerialRedirect(tx: DigitalPin, rx: DigitalPin, rate: BaudRate): void {
        // Fake function for simulator
        return;
    }


    function MP3CmdWrite(cmd: number[]) {
        let sum = 0;
        let sum1 = 0;
        let buf = pins.createBuffer(cmd.length + 4);

        for (let i = 0; i < 6; i++) {
            sum += cmd[i];
            sum1 = ((0xffff - sum) + 1);
        }
        let sum_l = sum1 & 0xff;
        let sum_h = sum1 >> 8;
        buf.setNumber(NumberFormat.UInt8BE, 0, 0x7e);
        for (let i = 0; i < cmd.length; i++) {
            buf.setNumber(NumberFormat.UInt8BE, i + 1, cmd[i])
        }
        buf.setNumber(NumberFormat.UInt8BE, cmd.length + 1, sum_h);
        buf.setNumber(NumberFormat.UInt8BE, cmd.length + 2, sum_l);
        buf.setNumber(NumberFormat.UInt8BE, cmd.length + 3, 0xEF);
        serial.writeBuffer(buf);
        basic.pause(20);
    }

    /**
        *  blue:bit-  mp3 player module.
        *  mp3 player .set baud rate 9600
        *  pin:Serial(rate:9600)
        * 
        */
    //% blockId=MP3Play block="MP3Play|song|%num"
    //% weight=60
    //% blockGap=15
    export function MP3Play(num: number): void {

        let buf: number[] = [0xFF, 0x06, 0x03, 0x01, 0x00, num]
        MP3CmdWrite(buf);
        return;
    }



    /**
     *  blue:bit-  mp3 player module.
     *  mp3 player Volume set 
     *  pin:Serial(rate:9600)
     *  @param vol  Volume;   eg: 28
     */
    //% blockId=MP3Volume block="MP3Volume|%vol"
    //%vol.min=0 vol.max=30
    //% weight=59
    //% blockGap=40
    export function MP3Volume(vol: number): void {

        let buf: number[] = [0xFF, 0x06, 0x06, 0x00, 0x00, vol]
        MP3CmdWrite(buf);
        return;
    }




    /**
     *  blue:bit-  MIDI module.
     *  MIDI init
     *  pin:Serial(rate:31250)
     * @param tx the new transmission pin, eg: DigitalPin.P1
     * @param rx the new reception pin, eg: DigitalPin.P0
     */
    //% blockId=midiInit block="midi Init|TX|%tx|RX|%rx"
    //% tx.fieldEditor="gridpicker" tx.fieldOptions.columns=3 tx.fieldOptions.width="300" 
    //% rx.fieldEditor="gridpicker" rx.fieldOptions.columns=3 rx.fieldOptions.width="300" 
    //% weight=58
    //% blockGap=15
    export function midiInit(tx: DigitalPin, rx: DigitalPin): void {
        blueBitKit.SerialRedirect(tx, rx, 31250);
        basic.pause(30);
        let buf = pins.createBuffer(3);
        buf.setNumber(NumberFormat.UInt8BE, 0, 0xb0);
        buf.setNumber(NumberFormat.UInt8BE, 1, 0x78);
        buf.setNumber(NumberFormat.UInt8BE, 2, 0x00);
        serial.writeBuffer(buf);
        basic.pause(5);
        buf.setNumber(NumberFormat.UInt8BE, 0, 0xb0);
        buf.setNumber(NumberFormat.UInt8BE, 1, 0x79);
        buf.setNumber(NumberFormat.UInt8BE, 2, 0x7f);
        serial.writeBuffer(buf);
        basic.pause(15);
        return;
    }



    /**
        *  blue:bit-  MIDI module.
        *  MIDI SetVolume
        *  pin:Serial(rate:31250)
        * @param vol SetVolume, eg: 100
        * 
        */
    //% blockId=midiSetVolume block="midi SetVolume|%vol"
    //%vol.min=0 vol.max=127
    //% weight=57
    //% blockGap=15
    export function midiSetVolume(vol: number): void {

        let buf = pins.createBuffer(3);
        buf.setNumber(NumberFormat.UInt8BE, 0, 0xb0);
        buf.setNumber(NumberFormat.UInt8BE, 1, 0x07);
        buf.setNumber(NumberFormat.UInt8BE, 2, vol);
        serial.writeBuffer(buf);
        basic.pause(10);

        return;
    }


    /**
        *  blue:bit-  MIDI module.
        *  MIDI Set instrument
        *  pin:Serial(rate:31250)
        * @param ins instrument, eg: 2
        * 
        */
    //% blockId=midiSetInstrument block="midi SetInstrument|%ins"
    //% weight=56
    //% blockGap=15
    export function midiSetInstrument(ins: number): void {

        let buf = pins.createBuffer(2);
        buf.setNumber(NumberFormat.UInt8BE, 0, 0xc0);
        buf.setNumber(NumberFormat.UInt8BE, 1, ins);
        serial.writeBuffer(buf);
        basic.pause(10);

        return;
    }



    /**
        *  blue:bit-  MIDI module.
        *  MIDI Note
        *  pin:Serial(rate:31250)
        * @param note Note, eg: 60
        * @param index SetVolume, eg: MIDI_Note.ON
        */
    //% blockId=midiNote block="midi Note|%ins|ON_OFF|%index"
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=1 index.fieldOptions.width="200" 
    //% weight=55
    //% blockGap=15
    export function midiNote(note: number, index: MIDI_Note): void {

        let buf = pins.createBuffer(3);
        if (index == 1) {
            buf.setNumber(NumberFormat.UInt8BE, 0, 0x90);
            buf.setNumber(NumberFormat.UInt8BE, 1, note);
            buf.setNumber(NumberFormat.UInt8BE, 2, 0x7f);
            serial.writeBuffer(buf);
        }

        if (index == 0) {
            buf.setNumber(NumberFormat.UInt8BE, 0, 0x80);
            buf.setNumber(NumberFormat.UInt8BE, 1, note);
            buf.setNumber(NumberFormat.UInt8BE, 2, 0x00);
            serial.writeBuffer(buf);
        }

        basic.pause(5);

        return;
    }
    

}