import EmployeeForm from '@/Components/EmployeeForm'
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/inertia-react'
import axios from 'axios'
import React, { useEffect,useState } from 'react'

const EditEmployee = () => {
    const params = new URLSearchParams(location.search);
    const [id,setId] = useState(params.get("id"));
    const [employee,setEmployee] = useState(null)
    const [error,setError] = useState(null)

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/employees/${id}`).then(res=>{
            setEmployee(res.data.data)
        })
    },[id])
    const onSubmit = (e,data) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',data.name);
        formData.append('address',data.address);
        formData.append('dob',data.dob);
        formData.append('gender',data.gender);
        formData.append('joined',data.joined);
        formData.append('designation',data.designation);
        formData.append('_method', 'PUT');
        axios.put(`http://127.0.0.1:8000/api/employees/${id}`,{body: data,headers: { "Content-Type": "multipart/form-data" }},).then(res=>{
            // console.log(res)
            window.history.go(-1)
        },err=>{
            setError(err.response.data.message)
        })
    }
    return (
        <Layout>
            <Head title="Edit Employee Employee" />
            {employee &&
            <EmployeeForm error={error} onSubmit={onSubmit} title="Edit Employee" employee={employee} btnName="Update"/>}
        </Layout>
    )
}

export default EditEmployee