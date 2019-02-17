import creatReducer from '../../utils/utils';

import types from '../types'

export const initialState = {
    Firstname: { value: '', hasError: false },
    Lastname: { value: '', hasError: false },
    companyName: { value: '', hasError: false },
    email: { value: '', hasError: false },
    whatsapp: { yes: false, no: false },
    Individual: false,
    company: false,
    whatsAppMessage: '',
    whomsgs: '',
    AddressLine1: { value: "", hasError: false },
    AddressLine2: { value: "", hasError: false },
    PhoneLine1: { value: "", hasError: false },
    PhoneLine2: { value: "", hasError: false },
    Comments: ""
}



export const DetailsReducer = creatReducer({},{
[types.DETAILS_SAVE_COMPELTED](state,action){
    const { details } = action;
    return Object.assign({},state,details)
},
[types.SAVE_DETAILS_FAILED](state,action){
    const {error} = action;
    return Object.assign({},state,{error})
},
[types.INVALID_DETAIL](state,action){
    const {name,isErr,} = action;
    return state[name] = {...state[name],hasError:isErr}


}
})