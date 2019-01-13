const AdmZip = require('adm-zip');

console.log('running?')

const zip = new AdmZip();
zip.addLocalFile('pizza.js');
zip.writeZip('upload.zip');
