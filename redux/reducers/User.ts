import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  firstName: string;
  lastName: string;
  userId: number;
  profileImage: string;
}

const initialState: UserState = {
  firstName: 'Michael',
  lastName: 'Ilkanayev',
  userId: 1,
  profileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateFirstName: (state, action: PayloadAction<{ firstName: string }>) => {
      state.firstName = action.payload.firstName;
    },
    resetToInitialState: () => initialState,
  },
});

export const { updateFirstName, resetToInitialState } = userSlice.actions;
export default userSlice.reducer;
