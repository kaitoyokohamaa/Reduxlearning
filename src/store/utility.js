export const updateObject = (oldObject,updatedvalues) =>{
    return{
        ...oldObject,
        ...updatedvalues
    }
};