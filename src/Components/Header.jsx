import React from 'react';
import {connect} from "react-redux";
import {useNavigate} from "react-router";

function Header(props) {

    const navigate = useNavigate()

    const logout = () => {
        props.dispatch({type: "LOGOUT"})
    }
    return (
        <div className={"p-3 flex gap-5 items-center justify-center w-full border-black border-b-2"}>
            <h1 className={" flex text-2xl font-bold w-3/4 justify-start"}>Health Tracker</h1>
            {
                props.user !== 0 ?
                    <div onClick={logout} className={"text-black flex w-1/4 justify-center h-8 items-center rounded bg-tomato font-bold "}>Logout</div> :
                    <div onClick={()=> navigate("/login")}>Login</div>
            }
        </div>
    );
}

function mapStateToProps(state){
    return {
        user : state.user
    }
}
export default connect(mapStateToProps)(Header);