import { configureStore } from "@reduxjs/toolkit";
import firestoreSlice from "./slices/firestoreSlice";

export const store = configureStore({
    reducer: {
        fireStore: firestoreSlice,
    },
});