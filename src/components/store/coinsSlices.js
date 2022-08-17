import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    bitState: 0,
    ethState: 0
}

const coinsInputsSlice = createSlice({
    name: 'coinsInput',
    initialState,
    reducers: {
        incBitToState: (state, action) => {
            state.bitState = state.bitState + action.payload    
        },
        decBitToState: (state, action) => {
            state.bitState = state.bitState - action.payload    
        },
        incEthToState: (state, action) => {
            state.ethState = state.ethState + action.payload    
        },
        decEthToState: (state, action) => {
            state.ethState = state.ethState - action.payload    
        }
    }
})

export const {incBitToState, decBitToState, incEthToState, decEthToState} = coinsInputsSlice.actions

export default coinsInputsSlice.reducer
