# Saving json using the file system api in Chrome

## Disclaimer
This is a personal guide not a peer reviewed journal or a sponsored publication. We make
no representations as to accuracy, completeness, correctness, suitability, or validity of any
information and will not be liable for any errors, omissions, or delays in this information or any
losses injuries, or damages arising from its display or use. All information is provided on an as
is basis. It is the reader’s responsibility to verify their own facts.

The views and opinions expressed in this guide are those of the authors and do not
necessarily reflect the official policy or position of any other agency, organization, employer or
company. Assumptions made in the analysis are not reflective of the position of any entity
other than the author(s) and, since we are critically thinking human beings, these views are
always subject to change, revision, and rethinking at any time. Please do not hold us to them
in perpetuity.

## Overview 
This is a simple example showing how to use the file system api to provide a "save as" style save button. 

## Video Tutorial
There is a free coding byte video tutorial on this code which can be found [here](https://beckhoff-au.teachable.com/admin/courses/1204981/curriculum/lectures/37475204)

## Getting Started
Activate and run the PLC project.  Open Main.view in liveview, swap live view to a real browser (as normal live view does not support loading) and load the example.json file by pressing the load button.  Pressing save will open the file save dialog.

## Code Snippets
The following section of code is the mechanisim behind the reading and saving. 
```javascript
TcHmi.Symbol.readEx2('%s%PLC1.GVL.myArray%/s%', function(data) {
    if (data.error === TcHmi.Errors.NONE) {
        // Handle result value... 
        var value = data.value;

        var data = JSON.stringify(value, null, 2);
        var file = new Blob([data]);
        var writableFile = {};

        const options = {
            types: [{
                description: 'Json Files',
                accept: {
                    'text/plain': ['.json'],
                },
            }, ],
        };

        window.showSaveFilePicker(options).then(function(fileHandle) {
            console.log('We now have a file handle');
            return fileHandle.createWritable()

        }).then(function(writable) {
            writableFile = writable;
            return writableFile.write(file);

        }).then(function(respose) {
            console.log('Closing File');
            return writableFile.close();

        }).then(function(respose) {
            console.log("Save Complete");

        }).catch(function(respose) {
            console.log(respose);
            console.log("Save Failed");
        });

    } else {
        // Handle error... 
    }
});
```

## Versions
* TcXaeShell 3.1.4024.20
* TE2000 1.12.750.1

## Need more help?
Checkout the other Coding Bytes [here](https://codingbytes.teachable.com/p/codingbytes_twincathmi)
Please visit http://beckhoff.com/ for further guides