import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@/Components/Table";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/inertia-react";

export default function Welcome(props) {
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users/2/todos").then(
            (res) => {
                // console.log(res.data);
                setTodos(res.data);
            },
            (err) => {
                // console.log(err)
            }
        );
    }, []);
    return (
        <Layout>
            <Head title="Public Api" />
            <div className="w-[90%] md:w-[85%] mx-auto">
                Fetch From Json Placeholder:
                <Table columns={["id", "title", "completed"]} datas={todos} />
            </div>
        </Layout>
    );
}
