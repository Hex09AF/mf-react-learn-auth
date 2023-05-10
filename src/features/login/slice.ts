import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

async function postJSON(data: Record<string, any>) {
  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result: {
      access_token: string;
    } = await response.json();
    console.log("Success:", result);

    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }) => {
    const res = await postJSON({
      email,
      password,
    });
    return res;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload?.access_token || "";
    });
  },
});

export default loginSlice.reducer;
