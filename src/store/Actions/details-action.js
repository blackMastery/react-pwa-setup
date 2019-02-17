import types from '../types';



export const saveDetails =(details)=>({
    type:types.SAVE_DETAILS,
    details
})


export const saving_details_success =()=>({
    type: types.SAVE_DETAILS_SUCCESS
})

export const saving_details_failed =(error)=>({
    type: types.SAVE_DETAILS_FAILED,
    error
})

export const invalid_detail = (name, isErr) => ({
        type: types.INVALID_DETAIL,
        name,
        isErr
    })

export const save_completed =(details)=>({
    type: types.DETAILS_SAVE_COMPELTED,
    details
})