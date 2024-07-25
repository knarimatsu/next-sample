"use client";
import React, { useEffect, useState } from "react";
import Posts from "./Posts";

const Count = () => {
    const [count, setCount] = useState(0);
    const add = () => setCount((prevCount) => prevCount + 1);
    const decriment = () => setCount((prevCount) => prevCount - 1);
    useEffect(() => {
        console.log("初期表示だけ現れます");
    }, []);
    return (
        <>
            <div className="flex">
                <div className="text-white">Count</div>
                <div className="w-2"></div>
                <div>{count}</div>
                <div className="w-2"></div>
                <button onClick={add}>plus</button>
                <button onClick={decriment}>minus</button>
            </div>
            <Posts param={count} />
        </>
    );
};

export default Count;
