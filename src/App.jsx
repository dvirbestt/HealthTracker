
import './App.css'
import Login from "./Components/Login.jsx";
import app from "./Firebase.js";
import Signup from "./Components/Signup.jsx";
import {Route, Routes, useNavigate} from "react-router";
import HomePage from "./Pages/HomePage.jsx";
import BasicInfo from "./Components/BasicInfo.jsx";
import Header from "./Components/Header.jsx";
import {connect} from "react-redux";
import {useEffect} from "react";

function App(props) {
    const firebaseApp = app
    const navigate = useNavigate()

    useEffect(()=> {
        if (props.user === 0) {
            navigate("/")
        }
    },[])

  return (
    <div className={"text-alabaster"}>
        <Header/>
        <Routes>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/signup"} element={<Signup/>}/>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/getBasicInfo"} element={<BasicInfo/>}/>
        </Routes>

    </div>
  )
}

function mapStateToProps(state) {
    return {
        user : state.user
    }
}
export default connect(mapStateToProps)(App)
