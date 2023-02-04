import { useEffect, useState } from "react";
import axiosClient from "./../../services/axios-client";
import DataContext from "./dataContext";

function DataState({ children }) {
    const [data, setData] = useState(null);

    const getData = async () => {
        await axiosClient
            .get("data")
            .then(function (response) {
                const res = response.data;
                setData(res);
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    return (
        <DataContext.Provider
            value={{
                data,
                getData
            }}
        >
            {children}
        </DataContext.Provider>
    );
}

export default DataState;