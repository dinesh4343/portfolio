import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'portfolio',
  location: 'us-central1'
};

export const createMovieListRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMovieList');
}
createMovieListRef.operationName = 'CreateMovieList';

export function createMovieList(dc) {
  return executeMutation(createMovieListRef(dc));
}

export const getMyPublicMovieListsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyPublicMovieLists');
}
getMyPublicMovieListsRef.operationName = 'GetMyPublicMovieLists';

export function getMyPublicMovieLists(dc) {
  return executeQuery(getMyPublicMovieListsRef(dc));
}

export const addMovieToMovieListRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddMovieToMovieList', inputVars);
}
addMovieToMovieListRef.operationName = 'AddMovieToMovieList';

export function addMovieToMovieList(dcOrVars, vars) {
  return executeMutation(addMovieToMovieListRef(dcOrVars, vars));
}

export const getMoviesInMovieListRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMoviesInMovieList', inputVars);
}
getMoviesInMovieListRef.operationName = 'GetMoviesInMovieList';

export function getMoviesInMovieList(dcOrVars, vars) {
  return executeQuery(getMoviesInMovieListRef(dcOrVars, vars));
}

