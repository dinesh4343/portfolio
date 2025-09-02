import { CreateMovieListData, GetMyPublicMovieListsData, AddMovieToMovieListData, AddMovieToMovieListVariables, GetMoviesInMovieListData, GetMoviesInMovieListVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateMovieList(options?: useDataConnectMutationOptions<CreateMovieListData, FirebaseError, void>): UseDataConnectMutationResult<CreateMovieListData, undefined>;
export function useCreateMovieList(dc: DataConnect, options?: useDataConnectMutationOptions<CreateMovieListData, FirebaseError, void>): UseDataConnectMutationResult<CreateMovieListData, undefined>;

export function useGetMyPublicMovieLists(options?: useDataConnectQueryOptions<GetMyPublicMovieListsData>): UseDataConnectQueryResult<GetMyPublicMovieListsData, undefined>;
export function useGetMyPublicMovieLists(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyPublicMovieListsData>): UseDataConnectQueryResult<GetMyPublicMovieListsData, undefined>;

export function useAddMovieToMovieList(options?: useDataConnectMutationOptions<AddMovieToMovieListData, FirebaseError, AddMovieToMovieListVariables>): UseDataConnectMutationResult<AddMovieToMovieListData, AddMovieToMovieListVariables>;
export function useAddMovieToMovieList(dc: DataConnect, options?: useDataConnectMutationOptions<AddMovieToMovieListData, FirebaseError, AddMovieToMovieListVariables>): UseDataConnectMutationResult<AddMovieToMovieListData, AddMovieToMovieListVariables>;

export function useGetMoviesInMovieList(vars: GetMoviesInMovieListVariables, options?: useDataConnectQueryOptions<GetMoviesInMovieListData>): UseDataConnectQueryResult<GetMoviesInMovieListData, GetMoviesInMovieListVariables>;
export function useGetMoviesInMovieList(dc: DataConnect, vars: GetMoviesInMovieListVariables, options?: useDataConnectQueryOptions<GetMoviesInMovieListData>): UseDataConnectQueryResult<GetMoviesInMovieListData, GetMoviesInMovieListVariables>;
