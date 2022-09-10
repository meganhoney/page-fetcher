// two command line args
// 1 - URL
// 2 - local file path
// should download recourse at URL to local path on your machine
// completed output e.g.:
// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html

// make http request and wait for response
// after http request is complete, take data and write it to a file on local system
// when trying to control the order of asynchronous operations, use nested callbacks

// If you dig into Node's documentation, you'll find there is a way to get statistics about a file that is sitting on your file system. However, you may not need to do that if you think about the fact that 1 character is equal to 1 byte.

// Install and use the request library to make the HTTP request (We know this library is deprecated but it is still ok to use for our purposes.)
// Use Node's fs (file system) module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning above)

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];

request(url, (error, response, body) => {

  if (error) {
    console.log('Error: ', error);
  }
  fs.writeFile(path, body, error => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
    }
  })
});
