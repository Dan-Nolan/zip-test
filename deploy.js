const AdmZip = require('adm-zip');

const zip = new AdmZip();
zip.addLocalFile('/pizza.js');
zip.writeZip('/upload.zip');
