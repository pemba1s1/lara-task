import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import React, { useState } from 'react'
import InputError from './InputError'

const EmployeeForm = ({onSubmit, employee={}, title, btnName, error}) => {
    const [name,setName]=useState(employee && employee.name ? employee.name : "")
    const [address,setAddress]=useState(employee && employee.address ? employee.address : "")
    const [dob,setDob]=useState(employee && employee.dob ? employee.dob : "")
    const [gender,setGender]=useState(employee && employee.gender ? employee.gender : "")
    const [joined,setJoined]=useState(employee && employee.joined ? employee.joined : "")
    const [designation,setDesignation]=useState(employee && employee.designation ? employee.designation : "")
    return (
        <div className="w-[85%] md:w-[80%] mx-auto flex flex-col">

            <h1>{title}</h1>
            <form className="flex sm:w-[80%] md:w-[70%] lg:w-[50%] flex-col gap-3 mt-3">

            <InputLabel value="Name" forInput="name"/>
            <TextInput value={name} type="text" name="name" handleChange={(e)=>setName(e.target.value)} required={true}/>
            {error &&<InputError message={error.name[0]}/>}
            <InputLabel value="Address" forInput="address"/>
            <TextInput value={address} type="text" name="address" handleChange={(e)=>setAddress(e.target.value)} required={true}/>
            {error &&<InputError message={error.address[0]}/>}
            <InputLabel value="DOB" forInput="dob"/>
            <TextInput value={dob} type="date" name="dob" handleChange={(e)=>setDob(e.target.value)} required={true}/>
            {error &&<InputError message={error.dob[0]}/>}
            <InputLabel value="Gender" forInput="gender"/>
            <div className="flex gap-3 mt-2">
                <input checked={gender==="male"} type="radio" name="gender" id="male" value="male" onChange={(e)=>setGender(e.target.value)}></input>
                <InputLabel value="Male" forInput="male"/>
                <input checked={gender==="female"} type="radio" name="gender" id="female" value="female" onChange={(e)=>setGender(e.target.value)}></input>
                <InputLabel value="Female" forInput="female"/>
                <input checked={gender==="others"} type="radio" name="gender" id="others" value="others" onChange={(e)=>setGender(e.target.value)}></input>
                <InputLabel value="Others" forInput="others"/>
            </div>
            {error &&<InputError message={error.gender[0]}/>}
            <InputLabel value="Joined Date" forInput="joined"/>
            <TextInput value={joined} type="date" name="joined" handleChange={(e)=>setJoined(e.target.value)} required={true}/>
            {error &&<InputError message={error.joined[0]}/>}
            <InputLabel value="Designation" forInput="designation"/>
            <TextInput value={designation} type="text" name="designation" handleChange={(e)=>setDesignation(e.target.value)} required={true}/>
            {error &&<InputError message={error.designation[0]}/>}
            <button onClick={(e)=>onSubmit(e,{name,address,dob,gender,joined,designation})} className="bg-sky-400 self-start px-9 py-2 rounded-lg text-neutral-50 font-bold">{btnName}</button>
            </form>
        </div>
    )
}

export default EmployeeForm