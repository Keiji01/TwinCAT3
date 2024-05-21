// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var tchmi_demo;
        (function (tchmi_demo) {
            function SaveCSV_Keiji(par1) {
                function ConvertToCSV(objArray) {
                    console.log("Start Saving your data...")
                    const array = [Object.keys(objArray[0])].concat(objArray)

                    return array.map(it => {
                        return Object.values(it).toString()
                    }).join('\r\n')
                }

                TcHmi.Symbol.readEx2('%s%PLC1.GVL.myArray%/s%', function (data) {
                    if (data.error === TcHmi.Errors.NONE) {
                        // Handle result value... 
                        var value = data.value;
                        stringCSV = ConvertToCSV(value);
                        console.log(stringCSV)

                        var file = new Blob([stringCSV]);
                        var writableFile = {};

                        const options = {
                            types: [
                              {
                                  description: 'CSV Files',
                                  accept: {
                                      'text/plain': ['.csv'],
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
            tchmi_demo.SaveCSV_Keiji = SaveCSV_Keiji;
        })(tchmi_demo = Functions.tchmi_demo || (Functions.tchmi_demo = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('SaveCSV_Keiji', 'TcHmi.Functions.tchmi_demo', TcHmi.Functions.tchmi_demo.SaveCSV_Keiji);
