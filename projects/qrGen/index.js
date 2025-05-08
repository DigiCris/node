import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import keccak256 from "keccak256";

//console.log(keccak256('hello').toString('hex')) 

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        "name": "url",
        "message": "Enter a URL: "
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    var qr_svg = qr.image(answers.url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream(keccak256(answers.url).toString('hex')+".png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });