const request = require('request');
const userInput = process.argv.slice(2);
const catURL = `https://api.thecatapi.com/v1/breeds/search?q=`
// console.log(userInput);
const charsInput = userInput[0].substring(0, 4);

const searchCat = catURL + charsInput;
// console.log(searchCat);

const catFetcher = function() {  //testing
request(searchCat, (error, response, body) => {
  const data = JSON.parse(body);
  
  // console.log(typeof data);
  if (!error && data[0]) {
    console.log(data[0].description);
  } else {

      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      return console.log('error:', error); // Print the error if one occurred
  }
});

} //testing

catFetcher(); //testing


// console.log(data[0].breeds[0].name);
// examples :
// https://api.thecatapi.com/v1/breeds
// https://api.thecatapi.com/v1/images/search?breed_ids=beng
