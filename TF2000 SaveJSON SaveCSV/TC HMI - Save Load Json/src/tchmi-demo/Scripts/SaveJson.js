// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.750.1/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var tchmi_demo;
        (function (tchmi_demo) {
            function SaveJson() {

                TcHmi.Symbol.readEx2('%s%PLC1.GVL.myArray%/s%', function (data) {
                    console.log(data);
                    if (data.error === TcHmi.Errors.NONE) {
                        // Handle result value... 
                        var value = data.value;
                        
                        var data = JSON.stringify(value, null, 2);
                        var file = new Blob([data]);
                        var writableFile = {};
                        
                        const options = {
                            types: [
                              {
                                  description: 'Json Files',
                                  accept: {
                                      'text/plain': ['.json'],
                                  },
                              },
                            ],
                        };

                        window.showSaveFilePicker(options).then(function (fileHandle) {
                            console.log('We now have a file handle');
                            return fileHandle.createWritable()

                        }).then(function (writable) {
                            writableFile = writable;
                            return writableFile.write(file);

                        }).then(function (respose) {
                            console.log('Closing File');
                            return writableFile.close();

                        }).then(function (respose) {
                            console.log("Save Complete");

                        }).catch(function (respose) {
                            console.log(respose);
                            console.log("Save Failed");
                        });

                    } else {
                        // Handle error... 
                    }
                });


            }
            tchmi_demo.SaveJson = SaveJson;
        })(tchmi_demo = Functions.tchmi_demo || (Functions.tchmi_demo = {}));
        Functions.registerFunctionEx('SaveJson', 'TcHmi.Functions.tchmi_demo', tchmi_demo.SaveJson);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);