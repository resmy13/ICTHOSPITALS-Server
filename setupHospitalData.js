const fs = require('fs');

// Sample hospital data
const hospitals = [
  {
    name: 'Mar Sleeva Medicity',
    patientCount: 100,
    location: 'Pala',
  },
  {
    name: 'Bharath Hospital',
    patientCount: 75,
    location: 'Kottayam',
  },
  {
    name: 'Mary Queens Medical Mission Hospital',
    patientCount: 50,
    location: 'Kanjirappally',
  },
];

// Convert the hospital data to a JSON string
const hospitalData = JSON.stringify(hospitals, null, 2);

// Write the JSON data to a file (hospitals.json)
fs.writeFileSync('hospitals.json', hospitalData);

console.log('Hospital data has been set up in hospitals.json');
