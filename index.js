const fs = require('fs');
var inquirer = require('inquirer');
inquirer
  .prompt([
      {
          type: "input",
          name: "question_1",
          message: "what is the title of your project?",
          default: ""
      },
      {
        type: "input",
        name: "question_2",
        message: "what is the description of your project?",
        default: ""
    },
    {
        type: "input",
        name: "question_3",
        message: "what are the installation instructions?",
        default: ""
    },
    {
        type: "input",
        name: "question_4",
        message: "enter any usage information?",
        default: ""
    },
    {
        type: "input",
        name: "question_5",
        message: "what are the contribution guidelines?",
        default: ""
    },
    {
        type: "input",
        name: "question_6",
        message: "what are the test instructions?",
        default: ""
    },
    {
        type: "list",
        name: "question_7",
        message: "choose a license",
        choices: ["Apache", "MIT", "Mozilla", "GNU"] 
    },
    {
        type: "input",
        name: "question_8",
        message: "what is your github username?",
        default: "", 
    },
    {
        type: "input",
        name: "question_9",
        message: "what is your email address?",
        default: "", 
    }
  ])
  .then(answers => {
    console.log("answers", answers)
    var stream = fs.createWriteStream("build/README.md");
    stream.once('open', function(fd) {
        const title = answers["question_1"]
        stream.write("###title\n");
        stream.write(`${title}\n`);
        stream.write("[email](###email)") //repeat this for all the questions
        stream.write("###table of contents\n")
        stream.write("##title\n")
        stream.write("##description\n")
        stream.write("##installation\n")
        stream.write("##usage\n")
        stream.write("##guidlines\n")
        stream.write("##test\n")
        stream.write("##license\n")
        stream.write("##username\n")
        stream.write("##email\n")
        const description = answers["question_2"]
        stream.write("###description\n");
        stream.write(`${description}\n`);
        const installation = answers["question_3"]
        stream.write("###installation\n");
        stream.write(`${installation}\n`);
        const usage = answers["question_4"]
        stream.write("###usage\n");
        stream.write(`${usage}\n`);
        const guidelines = answers["question_5"]
        stream.write("###guidelines\n");
        stream.write(`${guidelines}\n`);
        const test = answers["question_6"]
        stream.write("###test\n");
        stream.write(`${test}\n`);
        const license = answers["question_7"]
        stream.write("###license\n");
        stream.write(`${license}\n`);
        const username = answers["question_8"]
        stream.write("###username\n");
        stream.write(`${username}\n`);
        const email = answers["question_9"]
        stream.write("###email\n");
        stream.write(`${email}\n`);
        stream.write("###questions")
        stream.write(`if you have any questions contact me at ${email}. To view my github profile go to https://github.com/${username}`)
        stream.end();
    });
  })
  .catch(error => {
    console.error("error", error)
  });