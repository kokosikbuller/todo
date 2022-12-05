import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../types/todo'

export interface RootState {
  todos: ITodo[]
}

const initialState: RootState = {
  todos: []
}

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
   add: (state) => {
    state.todos.push({id: 1, text: 'lol'})
   }
  },
})

export const { add } = rootSlice.actions

export default rootSlice.reducer