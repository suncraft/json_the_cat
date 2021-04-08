const request = require('request');
const catURL = `https://api.thecatapi.com/v1/breeds/search?q=`
// console.log(userInput);
// const charsInput = userInput[0].substring(0, 4);

// const searchCat = catURL + charsInput;
// console.log(searchCat);

//when I come back for pt 2, testing this code
// *********************************************************************

const fetchBreedDescription = function(breedName, cb) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (data[0] === undefined){
      cb('Not found');
    } else if (error) {
      cb(error);
    } else {
      cb(null, data[0].description);
    }
  });
};

// const fetchBreedDescription = function(breedName, cb) {  //testing
// request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
//   const data = JSON.parse(body);
//     // if (data.isArray &&response.statusCode == 200) {
//     //   console.log('statusCode:', response && response.statusCode); 
//     //   return console.log("Possible wrong breed name. ");
//     // }
//     if (!error && data[0]) {
//       console.log(data[0].description);
//     }
//     else {
//         console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//         return console.log('error:', error); // Print the error if one occurred
//     }
//   });
// }

module.exports = { fetchBreedDescription };

// catFetcher(); //testing


// console.log(data[0].breeds[0].name);
// examples :
// https://api.thecatapi.com/v1/breeds/search
// https://api.thecatapi.com/v1/breeds
// https://api.thecatapi.com/v1/images/search?breed_ids=beng
