import { ITodo } from './../types/todo';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface RootState {
  todos: ITodo[]
}

interface UpdateProps {
  id: number;
  text: string;
}

const initialState: RootState = {
  todos:  JSON.parse(localStorage.getItem('todos') || 'false') || [],
}

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
   add: (state, action: PayloadAction<ITodo>) => {
    state.todos.push(action.payload);
    localStorage.setItem('todos', JSON.stringify([...state.todos]));
   },
   remove: (state, action: PayloadAction<number>) => {
    const res = state.todos.filter(item => item.id != action.payload);
    state.todos = res;
    localStorage.setItem('todos', JSON.stringify(res));
   },
   change: (state, action: PayloadAction<number>) => {
    state.todos = state.todos.map(item => {
      if(item.id === action.payload) {
        item.isChecked = !item.isChecked;
      }
      return item;
    })
    localStorage.setItem('todos', JSON.stringify([...state.todos]))
   },
   update: (state, action: PayloadAction<UpdateProps>) => {
    state.todos = state.todos.map(todo => {
      if(todo.id === action.payload.id) {
        todo.text = action.payload.text;
      }
      return todo;
    })
    localStorage.setItem('todos', JSON.stringify([...state.todos]))
   }
  },
})

export const { add, remove, change, update } = rootSlice.actions

export default rootSlice.reducer