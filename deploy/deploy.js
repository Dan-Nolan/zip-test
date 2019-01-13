const AdmZip = require('adm-zip');
const fs = require('fs-extra');
const path = require('path');

console.log('running?');

const zip = new AdmZip();
zip.addLocalFile(path.join(__dirname, '..', 'pizza.js'));
zip.writeZip('upload.zip');

const contents = fs.readdirSync('./');
console.log({ contents });
