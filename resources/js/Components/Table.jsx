import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "@inertiajs/inertia-react";

const Table = ({ columns, datas, action=false,fetchEmployee }) => {
    const del = (id) => {
        console.log(id)
        axios.delete(`http://127.0.0.1:8000/api/employees/${id}`).then(res=>{
            console.log(res)
            fetchEmployee()
        },err=>{
            console.log(err)
        })
    }

    return (
        <div className="mt-5">
            {datas ? (
                <div className="overflow-x-auto relative">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {columns &&
                                    columns.map((column, index) => (
                                        <th
                                            key={`col-${index}`}
                                            scope="col"
                                            className="py-3 px-6"
                                        >
                                            {column}
                                        </th>
                                    ))}
                                    {action &&<th>Action</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {datas.length > 0 ? (
                                datas.map((data, index) => (
                                    <tr
                                        key={`data-${index}`}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        {columns.map((column,index)=>(
                                            <td
                                                key={`col-${index}`}
                                                scope="row"
                                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                            {typeof(data[column])==='boolean'
                                                ? data[column]
                                                    ? "Done"
                                                    : "Not Done"
                                                : data[column]
                                            }
                                            </td>
                                            
                                        ))}
                                        {action &&
                                        <td>
                                        <div className="flex gap-5 pr-5">               
                                            <Link href={`/employee/view?id=${data.id}`}><i className="fa-solid fa-eye cursor-pointer"></i> </Link>
                                            <Link href={`/employee/edit?id=${data.id}`}><i className="fa-solid fa-pen-to-square cursor-pointer"></i> </Link>
                                            <i onClick={()=>del(data.id)} className="fa-solid fa-trash text-red-600 cursor-pointer"></i>
                                        </div>
                                        </td>}
                                    </tr>
                                ))
                            ) : (
                                <div>No data</div>
                            )}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div>Loading</div>
            )}
        </div>
    );
};

Table.propTypes = {
    columns: PropTypes.array,
    datas: PropTypes.array,
};

export default Table;
