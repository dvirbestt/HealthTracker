import React from 'react';
import {connect} from "react-redux";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {useNavigate} from "react-router";


function Signup(props) {

    const navigate = useNavigate();
    const signup = (e) =>{

        e.preventDefault();
        const formData = new FormData(e.target);
        const auth = getAuth();

        createUserWithEmailAndPassword(auth,formData.get("email"),formData.get("password"))
            .then((user)=> {
                // eslint-disable-next-line react/prop-types
                props.dispatch({
                    type: "LOGIN",
                    payload : {user: user.user}
                })

                localStorage.setItem("user", JSON.stringify(user.user));

                navigate("/")
            }).catch((e)=> {

            console.log(e)}

        )
    }

    return (
        <div className={"flex flex-col"}>
            <h2 className={"text-3xl font-bold mt-10"}>Sign Up</h2>
            <form className={"flex flex-col items-center mt-10 gap-4"} onSubmit={(e)=> signup(e)}>

                <div className={"flex flex-col"}>
                    <label>Email</label>
                    <input className={"text-black h-8 rounded w-56"} type={"email"} name={"email"}/>
                </div>

                <div className={"flex flex-col"}>
                    <label>Password</label>
                    <input className={"text-black h-8 rounded w-56"} type={"password"} name={"password"}/>
                </div>
                <button className={"h-8 w-20 p-1 bg-white text-black rounded"} type={"submit"}>Sign up</button>
            </form>
            <div className={"mt-5 text-lg"} onClick={()=> {navigate("/login")}}>Signed up already? Click Here!</div>
        </div>
    );
}

function mapStateToProps(state){
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Signup);