// eslint-disable-next-line no-unused-vars
import React, {useEffect, useRef, useState} from 'react';
import {connect} from "react-redux";

import HealthTable from "../Components/HealthTable.jsx";
import {useNavigate} from "react-router";
import Categories from "../Components/Categories.jsx";

function HomePage(props) {

    const navigate = useNavigate();

    useEffect(()=> {
       if (props?.user === 0){
           navigate("/login")
       }
    },[])

    return (
        <div className={"mt-5"}>

            { props?.user !==0 ?
                <Categories /> : <></>
            }


        </div>
    );
}

function mapStateToProps(state){
    return {
        user : state.user
    }
}


export default connect(mapStateToProps)(HomePage);
