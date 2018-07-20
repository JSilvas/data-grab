'use strict';

console.log('Signal check!');

// *********** HTTP Requests ***********

const testUrl = 'https://jsonplaceholder.typicode.com/posts/1';
// const artifactoryStorageUrl = 'http://35.226.93.161:8093/artifactory/api/storageinfo';
// const jarStatsUrl = 'http://35.226.93.161:8093/artifactory/api/storage/jcenter-cache/org/apache/tiles/tiles-api/2.0.6/tiles-api-2.0.6.jar?stats';


function runTestGetRequest() {
  axios.get(testUrl)  //Add second input 'params' for queries
    .then( data => console.log(data))
    .catch( err => console.error(err));
}

// axios.get(artifactoryStorageUrl)
//   .then( data =>  console.log('storage data: ', data))
//   .catch( err => console.error('storage data: ', err));


// *********** Function Calls ***********
runTestGetRequest();