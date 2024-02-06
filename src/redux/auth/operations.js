import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearAuthHeader,
  requestLoginUser,
  requestLogoutUser,
  requestRefreshUser,
  requestRegisterUser,
  setAuthHeader
} from "services/api";

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (formData, thunkAPI) => {
    try {
      const response = await requestRegisterUser(formData);
      setAuthHeader(response.token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (formData, thunkAPI) => {
    try {
      const response = await requestLoginUser(formData);
      setAuthHeader(response.token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      requestLogoutUser();
      clearAuthHeader();
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) return thunkAPI.rejectWithValue("You don't have a token!");
    try {
      setAuthHeader(token);
      const response = await requestRefreshUser();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);