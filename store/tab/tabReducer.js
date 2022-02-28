import * as TabActionTypes from './tabAction'
const initialState = {
    selectedTab:""
}

const tabReducer = (state = initialState , action)=>{
    switch(action.type){
        case TabActionTypes.SET_SELECTED_TAB:
            return {
                ...state, 
                selectedTab:action.payload.selectedTab
            }
        default: return state
    }   
}
export default tabReducer ;