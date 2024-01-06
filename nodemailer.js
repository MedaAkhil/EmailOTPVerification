const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

/** send mail from real gmail account */
const otp = generateRandomNumber();

    let config = {
        service : 'gmail',
        auth : {
            user: '[replace with your email]@gmail.com',
            pass: '[replace with your app password from google security]'
        },
        debug: true
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product : {
            name: "Your Company name",
            link : 'https://mailgen.js/'
        }
    })

    let response = {
        body: {
            name : "Event",
            intro: "Your Response have been taken",
            table : {
                data : [
                    {
                        item : "your OTP To Register",
                        otp : otp,
                    }
                ]
            },
            outro: "Looking forward to do more Events"
        }
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from : 'From Address@gmail.com',
        to : 'ToAddress@gmail.com',
        subject: "Event Registration",
        html: mail
    }

    transporter.sendMail(message).then(() => {
        return true
    }).catch(error => {
        return false
    })

    // res.status(201).json("getBill Successfully...!");

function generateRandomNumber() {
  // Generate a random number between 100000 and 999999
  return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
}



// Use the built-in readline module to read input from the console
const readline = require('readline');

// Create an interface to read input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for a number
rl.question('Enter a number: ', (input) => {
  // Parse the input to a number
  const number = parseFloat(input);

  // Check if the input is a valid number
  if (!isNaN(number)) {
    console.log(`You entered: ${number}`);
  } else {
    console.log('Invalid input. Please enter a valid number.');
  }
if (otp == number){
  console.log('correct otp');
}else{
  console.log('wrong otp');
}
  // Close the readline interface
  rl.close();
});
