// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.59/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var KbDetect;
        (function (KbDetect) {
            function FunctionDetectKb() {
                console.log("Event Fired!");            
                document.onkeydown = function KBDetectScript(e) {
                    console.log("Key Pressed!")
                    var key_press = e.key;
                    var key_code = key_press.charCodeAt(0);
                    console.log(key_press);
                    console.log(key_code);

                    // Write to PLC Key str and Key Code
                    TcHmi.Symbol.writeEx('%s%PLC1.GVL.strKeyPressedFromTF2000%/s%', key_press, function (data) {
                        if (data.error === TcHmi.Errors.NONE) {
                            //console.log('ok');
                        } else {
                            //console.log('error');
                        }
                    });

                    TcHmi.Symbol.writeEx('%s%PLC1.GVL.strKeyCodePressedFromTF2000%/s%', key_code, function (data) {
                        if (data.error === TcHmi.Errors.NONE) {
                            //console.log('ok');
                        } else {
                            //console.log('error');
                        }
                    });

                    // Write to PLC that the key is pressed
                    TcHmi.Symbol.writeEx('%s%PLC1.GVL.bKeyPressedTF2000%/s%', 'true', function (data) {
                        if (data.error === TcHmi.Errors.NONE) {
                            //console.log('ok');
                        } else {
                            //console.log('error');
                        }
                    });

                }
                document.onkeyup = function (e) {
                    console.log("Key Released!");
                    var key_press = e.key;

                    // Write to PLC that the key is released
                    TcHmi.Symbol.writeEx('%s%PLC1.GVL.bKeyPressedTF2000%/s%', 'false', function (data) {
                        if (data.error === TcHmi.Errors.NONE) {
                        //    console.log('ok');
                        } else {
                        //    console.log('error');
                        }
                    });
                }
            }
            KbDetect.FunctionDetectKb = FunctionDetectKb;
        })(KbDetect = Functions.KbDetect || (Functions.KbDetect = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('FunctionDetectKb', 'TcHmi.Functions.KbDetect', TcHmi.Functions.KbDetect.FunctionDetectKb);
