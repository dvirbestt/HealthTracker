import React, {useState} from 'react';
import { doc, setDoc } from "firebase/firestore";
import {db} from "../Firebase.js";
import {useNavigate} from "react-router";
import {connect} from "react-redux";

function BasicInfo(props) {

    const navigate = useNavigate();

    const [rangeNum,setRangeNum] = useState(100)
    const startProcess =async (e)=>{
        e.preventDefault();

        const formData = new FormData(e.target);
            const date = new Date();
             setDoc(doc(db,`Tracker`,props.user.email),{
                // eslint-disable-next-line react/prop-types
                user : props.user.email,
                name : formData.get("name"),
                height: rangeNum,
                startingWeight: formData.get("startingWeight"),
                targetWeight : formData.get("targetWeight"),
                mileStones : [{age: formData.get("age"),weight : formData.get("startingWeight"),
                    date : `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
                }],
                 gender : formData.get("gender")
            }).then(()=> {
                navigate("/")
             }).catch((e)=> {
                 console.log(e)
             })



    }

    return (
        <div>
            <form className={"flex flex-col items-center gap-3"} onSubmit={(e)=> startProcess(e)}>
                <p className={"text-lg p-2 mt-5 mb-5"}>Just before we start, Please provide some info</p>
                <div className={"flex flex-col"}>
                    <label>Name</label>
                    <input required className={"text-black h-8 rounded w-56"} type={"text"} name={"name"}/>
                </div>
                <div className={"flex flex-col"}>
                    <label>Starting Weight</label>
                    <input required className={"text-black h-8 rounded w-56"} type={"number"} name={"startingWeight"}/>
                </div>
                <div className={"flex flex-col"}>
                    <label>Target Weight</label>
                    <input required className={"text-black h-8 rounded w-56"} type={"number"} name={"targetWeight"}/>
                </div>
                <div className={"flex flex-col"}>
                    <label>Height</label>
                    <input className={"text-black h-8 rounded w-56"} required min={100} max={250} type={"range"} name={"height"} value={rangeNum} onChange={(e)=> setRangeNum(e.target.value)}/>
                    <div>{rangeNum}</div>
                </div>
                <div className={"flex flex-col"}>
                    <label>Gender</label>
                    <select required className={"text-black rounded w-20 h-8"} name={"gender"}>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className={"flex flex-col"}>
                    <label>Age</label>
                    <input required className={"text-black h-8 rounded w-56"} type={"number"} name={"age"}/>
                </div>

                <button className={"font-bold p-1 bg-white text-black w-20 h-8 rounded"} type={"submit"}>submit</button>
            </form>
        </div>
    );
}

function mapStateToProps(state){
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(BasicInfo);