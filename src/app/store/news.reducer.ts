import { createReducer, on } from '@ngrx/store';
import { addFavorite } from './news.actions';

export const initialState : any[] = [];

export const newsReducer = createReducer(
  initialState,
  on(addFavorite, (state, { news }) => {

    const exist = state.find(n => n.title === news.title)

    if (exist) {
      return state
    }

    return [...state, news]
  })

);