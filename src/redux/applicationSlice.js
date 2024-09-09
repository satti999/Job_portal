import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
    name: 'application',
    initialState: {
        applicants: [],
        singleApplicant: {}
    },
    reducers: {
        setAllApplicants: (state, action) => {
            state.applicants = action.payload;
        },
        setSingleApplicant: (state, action) => {
            state.singleApplicant = action.payload
        }
    }
});
export const { setAllApplicants } = applicationSlice.actions;
export default applicationSlice.reducer;