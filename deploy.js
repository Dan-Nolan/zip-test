const AdmZip = require('adm-zip');
const fs = require('fs-extra');

console.log('running?');

const zip = new AdmZip();
zip.addLocalFile('pizza.js');
zip.writeZip('upload.zip');

const contents = fs.readdirSync('./');
console.log({ contents });
