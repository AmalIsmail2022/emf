import { allEmployees, oneEmployee, createNewEmployee, deleteoneEmployee, editoneemployee, getError } from '../types/types'
import useGetData from '../../hooks/useGetData'
import useInsertData from '../../hooks/useInsertData'
import useDeleteData from '../../hooks/useDeleteData'
import useEditData from '../../hooks/useEditData'
export const getAllEmployees =()=> async(dispatch) => {

   try {
          const res = await useGetData('/api/v1/employees')
       dispatch( {
            type: allEmployees,
            data: res
       })
       
    
   } catch (e){
        dispatch( {
            type: getError,
            data: "error" +e
       })
    } 
}
export const getOneEmployee =(id)=> async(dispatch) => {

   try {
          const res = await useGetData(`/api/v1/employees/${id}`)
       dispatch( {
            type: oneEmployee,
            data: res
       })
       
    
   } catch (e){
        dispatch( {
            type: getError,
            data: "error" +e
       })
    } 
}
export const addEmployee =(formData)=> async(dispatch) => {

   try {
          const res = await useInsertData('/api/v1/employees', formData)
       dispatch( {
            type: createNewEmployee,
            data: res,
            loading: true
       })
       
    
   } catch (e){
        dispatch( {
            type: getError,
            data: "error" +e
       })
    } 
}

export const deleteEmployee =(id)=> async(dispatch) => {

   try {
          const res = await useDeleteData(`/api/v1/employees/${id}`)
       dispatch( {
            type: deleteoneEmployee,
            data: res,
            loading: true
       })
       
    
   } catch (e){
        dispatch( {
            type: getError,
            data: "error" +e
       })
    } 
}
export const editOneEmployee =(id, formdata)=> async(dispatch) => {
 
   try {
          const res = await useEditData(`/api/v1/employees/${id}`, formdata)
       dispatch( {
            type: editoneemployee,
            data: res,
            loading: true
       })
      
    
   } catch (e){
        dispatch( {
            type: getError,
            data: "error" +e
       })
    } 
}