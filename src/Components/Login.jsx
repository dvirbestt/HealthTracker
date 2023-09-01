import React from 'react';
import {connect} from "react-redux";
import {FcGoogle} from "react-icons/fc";
import {getAuth} from "firebase/auth";
import {  signInWithEmailAndPassword ,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import {useNavigate} from "react-router";

function Login(props) {

    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const auth = getAuth();
        signInWithEmailAndPassword(auth,formData.get("email"),formData.get("password"))
            .then((user)=> {

                // eslint-disable-next-line react/prop-types
                props.dispatch({

                        type: "LOGIN",
                     payload : {user: user.user}

                })
                localStorage.setItem("user",JSON.stringify(user.user));
                navigate("/")
            }).catch((e)=> {
            console.log(e)
        })

    }

    const loginWithGoogle = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth,provider)
            .then((user)=> {
                console.log(user.user.email)
                // eslint-disable-next-line react/prop-types
                props.dispatch({

                    type: "LOGIN",
                    payload : {user: user.user}

                })
                localStorage.setItem("user",JSON.stringify(user.user));
                navigate("/")
            }).catch((e)=>{
            console.log(e)
        })
    }


    return (
        <div className={"flex flex-col items-center gap-4"}>
            <h2 className={"text-3xl font-bold mt-10"}>Login</h2>
            <form className={"flex flex-col gap-3 items-center mt-10"} onSubmit={(e)=>login(e)}>
                <div className={"flex flex-col"}>
                    <label className={""}>Email</label>
                    <input className={" text-black h-8 rounded w-56"} type={"email"} name={"email"}/>
                </div>
                <div className={"flex flex-col"}>
                    <label>Password</label>
                    <input className={"text-black h-8 rounded w-56"} type={"password"} name={"password"}/>
                </div>
                <button className={" p-1 bg-white text-black w-20 h-8 rounded"} type={"submit"}>Login</button>
            </form>
            <div className={"text-lg"} onClick={()=> {navigate("/signup")}}>Not signed up yet? Click Here!</div>
            <div className={" flex gap-3 items-center bg-white text-black p-3 rounded"} onClick={loginWithGoogle}>Sign in with Google <FcGoogle/></div>
        </div>
    );
}
1
function mapStateToProps(state){
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Login);
