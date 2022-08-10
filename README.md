# pdfmake-example

Add some sample fonts to the fonts folder and create an index.js file

```js
var PdfPrinter = require('pdfmake');

var fonts = {
    Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Medium.ttf',
        italics: 'fonts/Roboto-Italic.ttf',
        bolditalics: 'fonts/Roboto-MediumItalic.ttf',
    },
};

var printer = new PdfPrinter(fonts);
var fs = require('fs');

var dd = {
    content: [
        'First paragraph',
        'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
    ],
};

var pdfDoc = printer.createPdfKitDocument(dd);
pdfDoc.pipe(fs.createWriteStream('basics.pdf'));
pdfDoc.end();
```

When run, this will generate a basics.pdf file in the root of the project.


