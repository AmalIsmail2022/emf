import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {getAllEmployees} from '../redux/actions/employeeAction'
const ViewEmployeesHook = () => {
   const dispatch = useDispatch()
  useEffect(() => {

  dispatch(getAllEmployees())
}, [])
  
  const dataEmployees = useSelector(state => state.employeesReducer.employees)
  const loading = useSelector(state => state.employeesReducer.loading)
let items = []
    if (dataEmployees) {
        items = dataEmployees
    }
    else {
        items = []
    }

    
  
   
return [items, loading]
  
}

export default ViewEmployeesHook;
