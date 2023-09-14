import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from '../../utils';

export const __addToDo = createAsyncThunk(
    '__addToDo',
    async (payload, thunkAPI) => {
        // waitTwoSeconds 예시:
        await waitTwoSeconds();
        return payload;
    }
);

export const __deleteTodo = createAsyncThunk(
    '__deleteToDo',
    async (payload, thunkAPI) => {
        await waitTwoSeconds();
        return payload;
    }
);

const initialState = {
    list: [],
    isLoading: false,
    isError: false,
    error: null,
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: {
        [__addToDo.fulfilled]: (state, action) => {
            state.list = state.list.concat(action.payload);
        },
        [__deleteTodo.fulfilled]: (state, action) => {
            state.list = state.list.filter(
                (todo) => todo.id !== action.payload.id
            );
        },
    },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
