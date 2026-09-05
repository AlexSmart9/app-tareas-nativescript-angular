import { newsReducer, initialState } from './news.reducer';
import { addFavorite } from './news.actions';

describe('NewsReducer', () => {
  
  it('should return the initial state when an unknown action is passed', () => {
    const action = { type: 'NO_OP' };
    const state = newsReducer(undefined, action);
    expect(state).toEqual(initialState);
  });

  it('should add a news item to favorites when it does not exist', () => {
    const newNews = { title: 'Noticia de prueba 1', content: 'Contenido de prueba' };
    const action = addFavorite({ news: newNews });
    
    const state = newsReducer(initialState, action);
    
    expect(state.length).toBe(1);
    expect(state[0]).toEqual(newNews);
  });

  it('should not duplicate a news item if it already exists in favorites', () => {
    const existingNews = { title: 'Noticia repetida', content: 'Contenido' };
    const currentState = [existingNews];
    
    const action = addFavorite({ news: existingNews });
    const state = newsReducer(currentState, action);
    
   
    expect(state.length).toBe(1);
  });

});