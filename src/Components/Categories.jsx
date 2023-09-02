import React from 'react';
import {useNavigate} from "react-router";

import scale from '../assets/weight.jpg'
import exercise from '../assets/exercise.jpg'
import nutrition from '../assets/nutrition.jpg'

const Categories = () => {

    const navigate = useNavigate();

    return (
        <div className={"flex flex-col w-72 h-screen gap-4 m-auto justify-center items-center text-black"}>
            <div onClick={navigate("/weight")} className={"h-32 w-72 border-2 rounded-md flex justify-center items-center"}>
                <img className={"-z-10 w-72 h-32 rounded-md object-cover absolute"} src={scale} alt="" srcset="" />
                <h1 className={"bg-onyx bg-opacity-50 rounded-md w-24"}>Weight</h1>
            </div >
            <div onClick={navigate("/exercise")} className={"h-32 w-72 border-2 rounded-md flex justify-center items-center"}>
                <img className={"-z-10 w-72 h-32 rounded-md object-cover absolute"} src={exercise} alt="" srcSet=""/>
                <h1 className={"bg-onyx bg-opacity-50 rounded-md w-24"}>Exercise</h1>
            </div>
            <div onClick={navigate("/nutrition")} className={"h-32 w-72 border-2 rounded-md flex justify-center items-center"}>
                <img className={"-z-10 w-72 h-32 rounded-md object-cover absolute"} src={nutrition} alt="" srcSet=""/>
                <h1 className={"bg-onyx bg-opacity-50 rounded-md w-24"}>Nutrition</h1>
            </div>
        </div>
    );
};

export default Categories;