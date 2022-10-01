import EmployeeForm from '@/Components/EmployeeForm'
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/inertia-react'
import axios from 'axios'
import React, {useState} from 'react'

const AddEmployee = () => {
    const [error,setError] = useState(null)
    const onSubmit = (e,data) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',data.name);
        formData.append('address',data.address);
        formData.append('dob',data.dob);
        formData.append('gender',data.gender);
        formData.append('joined',data.joined);
        formData.append('designation',data.designation);
        console.log(formData)
        axios.post(`http://127.0.0.1:8000/api/employees`,formData,{headers: { "Content-Type": "multipart/form-data" }},).then(res=>{
            // console.log(res.data)
            history.go(-1)
        },err=>{          
            setError(err.response.data.message)
        })
    }
    return (
        <Layout>
            <Head title="Add Employee" />
            <EmployeeForm onSubmit={onSubmit} title="Add Employee" btnName="Add" error={error}/>
        </Layout>
    )
}

export default AddEmployee