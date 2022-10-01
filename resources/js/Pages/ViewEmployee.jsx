import EmployeeForm from '@/Components/EmployeeForm'
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/inertia-react'
import axios from 'axios'
import React,{useEffect,useState} from 'react'

const ViewEmployee = () => {
    const params = new URLSearchParams(location.search);
    const [id,setId] = useState(params.get("id"));
    const [employee,setEmployee] = useState(null)
    const [error,setError] = useState(null)

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/employees/${id}`).then(res=>{
            setEmployee(res.data.data)
        },err=>{
            setError(err.response.data.message)
        })
    },[id])
    
    return (
        <Layout>
            <Head title="Employee Detail" />
            <div className="w-[90%] sm:w-[85%] mx-auto flex flex-col">
            {employee &&
            <>
            <h1 className="text-[20px] font-bold underline">Employee Detail</h1>
            <p className="mt-2">Name : {employee.name}</p>
            <p className="mt-1">Address : {employee.address}</p>
            <p className="mt-1">DOB: {employee.dob}</p>
            <p className="mt-1">Gender : {employee.gender}</p>
            <p className="mt-1">Joined : {employee.joined}</p>
            <p className="mt-1">Designation : {employee.designation}</p>
            </>}
            {error && <p>{error}</p>}
        </div>
        </Layout>
    )
}

export default ViewEmployee