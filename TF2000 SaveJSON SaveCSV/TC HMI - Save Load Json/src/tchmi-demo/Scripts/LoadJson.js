// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.750.1/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var tchmi_demo;
        (function (tchmi_demo) {
            function LoadJson() {

                if (typeof FileReader === 'undefined') {
                    console.log('File loading not supported by your browser');
                    return;
                }

                var inputElement = document.createElement('input');

                inputElement.type = 'file';
                inputElement.accept = '.json';
                inputElement.multiple = false;

                inputElement.addEventListener('change', function (data) {

                    if (inputElement.files) {

                        var file = inputElement.files[0];
                        var reader = new FileReader();

                        reader.addEventListener('loadend', function (load_data) {

                            if (reader.result) {
                                var myJson = JSON.parse(reader.result);
                                
                                TcHmi.Symbol.writeEx('%s%PLC1.GVL.myArray%/s%', myJson, function (data) {
                                    if (data.error === TcHmi.Errors.NONE) {
                                        console.log('ok');
                                    } else {
                                        console.log('error');
                                    }
                                });

                            }


                        });
                        reader.addEventListener('error', function (load_data) {
                            console.log('File load error');
                        });

                        reader.readAsText(file);

                    }
                });

                inputElement.click();
                return;



            }
            tchmi_demo.LoadJson = LoadJson;
        })(tchmi_demo = Functions.tchmi_demo || (Functions.tchmi_demo = {}));
        Functions.registerFunctionEx('LoadJson', 'TcHmi.Functions.tchmi_demo', tchmi_demo.LoadJson);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);