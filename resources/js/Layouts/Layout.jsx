import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Layout = ({ children }) => {
    return (
        <div className="relative flex-col flex items-top min-h-screen pb-10 bg-gray-100 dark:bg-gray-900  sm:pt-0">
            <div className="px-6 py-4 sm:block">
                <Link
                    href={route("publicApi")}
                    className="text-sm text-gray-700 dark:text-gray-500 underline"
                >
                    Public Api
                </Link>
                <Link
                    href={route("employee")}
                    className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                >
                    Employees
                </Link>
            </div>
            {children}
        </div>
    );
};

export default Layout;
