import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './store';

// 定义 slice state 的类型
interface appstoreState {
  userName: string;
  //true为白天，false为黑夜
  currentMode: boolean;
  backPicture: string;
}
// 使用该类型定义初始 state
const initialState: appstoreState = {
  userName: '',
  currentMode: true,
  backPicture: ""
};

export const appstoreStateSlice = createSlice({
  name: 'appstore',
  // `createSlice` 将从 `initialState` 参数推断 state 类型
  initialState,
  reducers: {
    // 使用 PayloadAction 类型声明 `action.payload` 的内容
    setMode: (state, action: PayloadAction<boolean>) => {
      state.currentMode = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setBackPictureurl: (state, action: PayloadAction<string>) => {
      state.backPicture = action.payload;
    }
  },
});

export const { setMode, setUsername, setBackPictureurl } = appstoreStateSlice.actions;

// selectors 等其他代码可以使用导入的 `RootState` 类型
export const storeUserName = (state: RootState) => state.appstore.userName;
export const storeCurrentMode = (state: RootState) => state.appstore.currentMode;
export const storeBackPicture = (state: RootState) => state.appstore.backPicture;
//提供给store注册
export default appstoreStateSlice.reducer;