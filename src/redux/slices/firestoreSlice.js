import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from '../../api/auth/firebase'
import { setDoc, getDoc, doc } from "firebase/firestore";

export const fetchPreferencesAsync = createAsyncThunk(
    "firestore/fetchPreferences",
    async () => {
        const user = auth.currentUser;
        const docRef = doc(db, "UserPreferences", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            return {
                name: '',
                genres: [],
                countryCodes: [],
                artists: [],
            };
        }
    }
);

export const updatePreferencesAsync = createAsyncThunk(
    "firestore/updatePreferences",
    async (preferences) => {
        const user = auth.currentUser;
        const docRef = doc(db, "UserPreferences", user.uid);
        await setDoc(docRef, preferences);
    }
);

export const firestoreSlice = createSlice({
    name: 'firestore',
    initialState: {
        status: 'idle',
        error: null,
        preferences: {
            name: '',
            genres: [],
            countryCodes: [],
            artists: []
        }
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPreferencesAsync.pending, (state) => {
                state.status = 'Fetching';
                state.error = null;
            })
            .addCase(fetchPreferencesAsync.fulfilled, (state, action) => {
                state.status = 'Fetched';
                state.preferences = action.payload;
                state.error = null;
            })
            .addCase(fetchPreferencesAsync.rejected, (state, action) => {
                state.status = 'Fetch Failed';
                state.error = action.payload || 'Failed to fetch preferences';
            })
        builder
            .addCase(updatePreferencesAsync.pending, (state) => {
                state.status = 'Updating';
                state.error = null;
            })
            .addCase(updatePreferencesAsync.fulfilled, (state) => {
                state.status = 'Updated';
                state.error = null;
            })
            .addCase(updatePreferencesAsync.rejected, (state, action) => {
                state.status = 'Update Failed';
                state.error = action.payload || 'Failed to update preferences';
            });
    }
});


export default firestoreSlice.reducer;
