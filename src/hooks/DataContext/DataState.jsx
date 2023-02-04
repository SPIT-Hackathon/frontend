import { alertBox } from "@/utils";
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

    const sendTranscripts = async (data) => {
        console.log("send transcripts: ", data)
        alertBox("Request in progress, we'll notify once it's done!", "success");
        await axiosClient
            .post("create", data)
            .then(function (response) {
                const res = response.data;
                setData(res);
            })
            .catch(function (error) {
                alertBox();
                console.log(error);
            });
    }

    return (
        <DataContext.Provider
            value={{
                data,
                getData,
                sendTranscripts
            }}
        >
            {children}
        </DataContext.Provider>
    );
}

export default DataState;