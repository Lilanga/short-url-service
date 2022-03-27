import { createAction } from "@reduxjs/toolkit";

export const generateCallBegan = createAction("api/generateCallBegan");
export const generateCallSucess = createAction("api/generateCallSucess");
export const generateCallFailed = createAction("api/generateCallFailed");