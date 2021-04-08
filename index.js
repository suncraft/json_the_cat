const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

// const catFetch = function(searchCat, callback) {
//   fetchBreedDescription(breedName, (error, desc) => {
//     if (error) {
//       console.log('Error fetch details:', error);
//     } else {
//       console.log(desc);
//     }
//   });
// };