const fs = require("fs");
const path = require("path");

//Create folder
/* fs.mkdir(path.join(__dirname, "/test"), {}, err => {
  if (err.code == "EEXIST") {
    console.log("Folder already exists");
    return;
  }
  console.log("Folder created");
});

// Create and Write File
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  err => {
    if (err) throw err;
    console.log("File created and written");

    // Append File
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      " I love node.js",
      err => {
        if (err) throw err;
        console.log("File created and written");
      }
    );
  }
); */

// Rename File
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  err => {
    if (err) throw err;
    console.log("File renamed");
  }
);
