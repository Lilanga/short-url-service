import { createSlice } from "@reduxjs/toolkit";
import { generateCallBegan } from "./apiActions";

const slice = createSlice({
    name: "shortUrl",
    initialState: {
        url: '',
        longUrl: '',
        loading: false,
        error: false,
        errorCode: ''
    },

    reducers: {
        codeRequested: (shortUrl, action) => {
            shortUrl.loading = true;
            shortUrl.error = false;
            shortUrl.errorCode = '';
        },

        codeReceived: (shortUrl, action) => {
            shortUrl.url = action.payload.shortUrl;
            shortUrl.longUrl = action.payload.longUrl;
            shortUrl.loading = false;
            shortUrl.error = false;
            shortUrl.errorCode = '';
        },

        codeRequestFailed: (shortUrl, action) => {
            shortUrl.url = '';
            shortUrl.loading = false;
            shortUrl.error = true;
            shortUrl.errorCode = action.payload;
        },
    },
});

export default slice.reducer;

const { codeRequested, codeReceived, codeRequestFailed } = slice.actions;

export const generateCode = (longUrl) => (dispatch) => {
    const path = "/generate";
    return dispatch(
        generateCallBegan({
            path,
            longUrl,
            onStart: codeRequested.type,
            onSuccess: codeReceived.type,
            onError: codeRequestFailed.type,
        })
    );
};