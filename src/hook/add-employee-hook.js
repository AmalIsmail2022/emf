import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import notify from '../components/utility/useNotify'
import { ToastContainer, toast } from 'react-toastify';
import {addEmployee} from '../redux/actions/employeeAction'

const AddEmployeeHook = () => {
     const dispatch = useDispatch()
const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const addNew = async (e) => {
    if (
      name === "" || age === "" || email === "" || phone === ""
    ) {
      notify('Please enter valid input', "warn");
      return
    }
    e.preventDefault()
    const formData = {
    name:name,
    age:age,
    email: email,
    phone: phone
    }
    await dispatch(addEmployee(formData))
    setName("")
    setAge("")
    setEmail("")
    setPhone("")
    notify('New employee has been added successfully', "success");

setTimeout(() => {
                       window.location.reload();
                    }, 1500);
  }
    

    return [name, age, email, phone, setName, setAge, setEmail, setPhone, addNew]
}

export default AddEmployeeHook;
