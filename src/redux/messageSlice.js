import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMessages = createAsyncThunk(
  'messages/fetchMessages',
  async () => {
    const res = await fetch('http://127.0.0.1:3000/api/v1/messages');
    const messageJson = await res.json();
    return messageJson.message;
  },
);

const options = {
  name: 'message',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchMessages.fulfilled]: (state, action) => action.payload,
  },
};

const messageSlice = createSlice(options);
export const selectMessage = (state) => state.message;
export default messageSlice.reducer;
