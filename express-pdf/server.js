const express = require("express")
const server = express()
var PdfPrinter = require('pdfmake');
var fs = require('fs');

var fonts = {
    Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Medium.ttf',
        italics: 'fonts/Roboto-Italic.ttf',
        bolditalics: 'fonts/Roboto-MediumItalic.ttf',
    },
};

var printer = new PdfPrinter(fonts);

var dd = {
    content: [
        'First paragraph',
        'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
    ],
};


server.get("/pdf/preview", (req, res) => {
    res.setHeader("Content-Type", "application/pdf")
    var pdfDoc = printer.createPdfKitDocument(dd);
    pdfDoc.pipe(res);
    pdfDoc.end()

})

server.get("/pdf/download", (req, res) => {
    res.setHeader('Content-Disposition', 'attachment; filename=basics.pdf');
    var pdfDoc = printer.createPdfKitDocument(dd);
    pdfDoc.pipe(res);
    pdfDoc.end()
})

server.get("/", (req, res) => {
    res.send(`
    <p>
        <a href="/pdf/preview" target="_blank">View Pdf</a>
    </p>
    <p>
        <a href="/pdf/download" >Download Pdf</a>
    </p>
    `
    )

})

server.listen(4000, () => console.log("express running on http://localhost:4000"))