const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'portfolio',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const createMovieListRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMovieList');
}
createMovieListRef.operationName = 'CreateMovieList';
exports.createMovieListRef = createMovieListRef;

exports.createMovieList = function createMovieList(dc) {
  return executeMutation(createMovieListRef(dc));
};

const getMyPublicMovieListsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyPublicMovieLists');
}
getMyPublicMovieListsRef.operationName = 'GetMyPublicMovieLists';
exports.getMyPublicMovieListsRef = getMyPublicMovieListsRef;

exports.getMyPublicMovieLists = function getMyPublicMovieLists(dc) {
  return executeQuery(getMyPublicMovieListsRef(dc));
};

const addMovieToMovieListRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddMovieToMovieList', inputVars);
}
addMovieToMovieListRef.operationName = 'AddMovieToMovieList';
exports.addMovieToMovieListRef = addMovieToMovieListRef;

exports.addMovieToMovieList = function addMovieToMovieList(dcOrVars, vars) {
  return executeMutation(addMovieToMovieListRef(dcOrVars, vars));
};

const getMoviesInMovieListRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMoviesInMovieList', inputVars);
}
getMoviesInMovieListRef.operationName = 'GetMoviesInMovieList';
exports.getMoviesInMovieListRef = getMoviesInMovieListRef;

exports.getMoviesInMovieList = function getMoviesInMovieList(dcOrVars, vars) {
  return executeQuery(getMoviesInMovieListRef(dcOrVars, vars));
};
