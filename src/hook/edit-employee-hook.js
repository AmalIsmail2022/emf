import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import notify from '../components/utility/useNotify'
import { ToastContainer, toast } from 'react-toastify';
import { editOneEmployee, getOneEmployee} from '../redux/actions/employeeAction'
import { useNavigate } from 'react-router-dom';

const EditEmployeeHook = (id) => {
     const dispatch = useDispatch()
useEffect(() => {
    const run = async () => {
        setLoadingData(true)
        await dispatch(getOneEmployee(id))
        setLoadingData(false)

}
 run()
}, [])
    
    const itemem = useSelector(state => state.employeesReducer.employee)

// console.log(itemem.name)
    // console.log("item:"+ itemem)
    
      const navigate = useNavigate()
    const [nname, setnName] = useState('');
    const [nage, setnAge] = useState('');
    const [nemail, setnEmail] = useState('');
    const [nphone, setnPhone] = useState('');
    const [loading, setLoading] = useState(true)
    const [loadingData, setLoadingData] = useState(true)
    useEffect(() => {
   

            if (itemem) {
                setnName(itemem.name)
                setnAge(itemem.age)
                setnEmail(itemem.email)
                setnPhone(itemem.phone)
      
            }
        
        // console.log("item:"+itemem.name)
}, [itemem])
const onChangeName = (event) => {
        event.persist();
        setnName(event.target.value)
    }
const onChangeAge = (event) => {
        event.persist();
        setnAge(event.target.value)
    }
const onChangeEmail = (event) => {
        event.persist();
        setnEmail(event.target.value)
    }
const onChangePhone = (event) => {
        event.persist();
        setnPhone(event.target.value)
    }

    const editEmp = async (e) => {
          e.preventDefault();
      console.log('edit')
    if (
      nname === "" || nage === "" || nemail === "" || nphone === ""
    ) {
      notify('Please enter valid input', "warn");
      return
    }
      const formdata = 
        {
    name:nname,
    age:nage,
    email: nemail,
    phone: nphone
    }

      
           setLoading(true)
      await dispatch(editOneEmployee(id, formdata))
      setLoading(false)
    }

            const items = useSelector(state => state.employeesReducer.editEmployees)
    
   


    const khalas = () => {
        if (loading === false) {
             
                setnName('')
                setnAge('')
                setnEmail('')
            setnPhone('')
                    
                  if (items) {
          
             notify("Data updated successfully", "success")
                setTimeout(() => {
                     navigate('/')
                }, 1500);
                    
       
                 } else {
                     notify("Problem in updating", "error")
                 
             
}  
       
                 } 
    
    }
    useEffect(() => {
       
          khalas()
        
        
    }, [loading])
    
    
    
    return [nname, nage, nemail, nphone, setnName, setnAge, setnEmail, setnPhone, editEmp, onChangeName, onChangeAge, onChangeEmail,onChangePhone ]
}

export default EditEmployeeHook;
