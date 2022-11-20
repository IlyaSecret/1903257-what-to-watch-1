import { createAction } from '@reduxjs/toolkit';
import { Films } from '../types/films';
import { AuthorizationStatus } from '../const';
export const changeGenre = createAction<{ currentGenre: string }>('main/changeGenre');
export const increaseFilmsCount = createAction('main/increaseFilmsCount');
export const loadFilms = createAction<Films>('main/loadFilms');
export const requireAuthorization = createAction<AuthorizationStatus>('main/authorizationStatus');
export const setError = createAction<string | null>('app/setError');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
