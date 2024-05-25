import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/harsh-b14')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
    return(
        <div className="text-center m-4 bg-gray-800 text-white p-4 text-3xl">
            Github username : {data.login}
        </div>
    );
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/harsh-b14');
    return res.json()
}