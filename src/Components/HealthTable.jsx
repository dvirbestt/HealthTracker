import React, {useEffect, useRef, useState} from 'react';
import TableRow from "./TableRow.jsx";
import {useNavigate} from "react-router";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "../Firebase.js";
import {connect} from "react-redux";
import HomePageComponent from "./HomePageComponent.jsx";
import BasicInfoComponent from "./BasicInfoComponent.jsx";

function HealthTable(props) {

    const [basicInfo, setBasicInfo] = useState({})
    const mileStoneWeight = useRef()
    const mileStoneAge = useRef()
    const [list,setList] = useState([])

    useEffect(()=> {
        setList(basicInfo.mileStones)
    },[basicInfo])

    const navigate = useNavigate();

    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        if (props.user === 0) {
            navigate("/login")
        }

        getDoc(doc(db, "Tracker", props.user.email))
            .then((doc) => {
                if (doc.data() !== undefined) {
                    setBasicInfo(doc.data())

                } else {
                    navigate("/getBasicInfo");
                }
            }).catch((e) => {
            console.log(e)
        })

    }, [])



    useEffect(()=> {
        if (list?.length > 0){
            setBasicInfo(current => {
                current.mileStones = list
                setDoc(doc(db,"Tracker",props.user.email), {...current})
                return current;
            })
        }
    },[list])

    const addMilestone = () => {
        const date = new Date();
        setList([...list,{
            age:mileStoneAge.current.value,
            weight: mileStoneWeight.current.value,
            date: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
        }
        ]);


    }


    return (
        <>
            <HomePageComponent name={basicInfo?.name}/>
            <BasicInfoComponent basicInfo={basicInfo}/>

        <div className={"flex gap-3  justify-center items-baseline text-center w-full mt-10 mb-5 p-5 font-bold text-sm"}>
            <div className={"flex gap-2 justify-center items-center flex-col"}><div> Obesity</div> <div className={"w-3 h-3 bg-red  border-black border-2"}></div></div>
            <div className={"flex gap-2 justify-center items-center flex-col"}> Over Weight <div className={"w-3 h-3 bg-orange border-black border-2"}></div></div>
            <div className={"flex gap-2 justify-center items-center  flex-col"}> Healthy <div className={"w-3 h-3 bg-green  border-black border-2"}></div></div>
            <div className={"flex gap-2 justify-center items-center  flex-col"}> Under Weight <div className={"w-3 h-3 bg-blue  border-black border-2"}></div></div>
        </div>
    <table className={"border-black m-auto border-2"}>
        <thead>
        <tr>
            <th>Weight</th>
            <th>BMI</th>
            <th>BMR</th>
            <th>Date</th>
        </tr>
        </thead>
        <tbody>

        <TableRow basicInfo={basicInfo} list={list}/>


        </tbody>
    </table>

            <h3>Add A Milestone</h3>
            <div className={"input-field"}>
                <label>Weight</label>
                <input type={"number"} name={"weight"} ref={mileStoneWeight}/>
            </div>
            <div className={"input-field"}>
                <label>Age</label>
                <input type={"number"} name={"age"} ref={mileStoneAge} />
            </div>
            <button type={"submit"} onClick={addMilestone}>Submit</button>

        </>
    );
}

function mapStateToProps(state) {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(HealthTable);