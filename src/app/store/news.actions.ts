import { createAction, props } from '@ngrx/store';

export const addFavorite = createAction(
  '[News] Agregar a favoritos',
  props<{ news: any }>()
)

