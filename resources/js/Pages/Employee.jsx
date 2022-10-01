import React, {useEffect, useState} from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import Layout from "@/Layouts/Layout";
import axios from "axios";
import Table from "@/Components/Table";

export default function Employee(props) {
    const [employees,setEmployee] = useState(null)

    const fetchEmployee = () => {
        axios.get('http://127.0.0.1:8000/api/employees').then(res=>{
            console.log(res.data)
            setEmployee(res.data.data)
        },err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        fetchEmployee()
    },[])
    return (
        <Layout>
            <Head title="Employee" />
            <div className="w-[90%] sm:w-[85%] mx-auto flex flex-col">
            <Link className="self-end" href={route("createEmployee")}><button className="bg-sky-400 px-5 text-[14px] sm:text-[15px] md:px-9 py-2 rounded-lg text-neutral-50 font-bold">Add Employee</button></Link>
                <Table columns={["id", "name", "designation"]} action={true} datas={employees} fetchEmployee={fetchEmployee}/>
            </div>
        </Layout>
    );
}
