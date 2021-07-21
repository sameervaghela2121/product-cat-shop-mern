import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserAction } from '../Redux/Actions/userActions';


const Dashboard = () => {
    var token = localStorage.getItem('token');
    var usersname = localStorage.getItem('name');
    const dispatch = useDispatch();
    const history = useHistory();
    const luserselec = useSelector(state => state.loginUser)

    const logoutbtn = (e) => {
        // localStorage.removeItem("token");
        // localStorage.removeItem("name");
        // localStorage.removeItem("email");
        // localStorage.removeItem("address");
        dispatch(logoutUserAction());
        history.push("/login");
    }
    useEffect(() => {
        // if(!localStorage.getItem('task')){
        //     // history.push("/login")
        // }
        if(!luserselec.luser){
            localStorage.removeItem("token");
            localStorage.removeItem("name");
            localStorage.removeItem("email");
            localStorage.removeItem("address");
            history.push("/login");
        }
        
    }, [])

    return (
        <div>
            {
                (token)?<h1>Welcome To Dashboard {usersname}!</h1>:
                <h2>Please Login First!</h2>

            }
            <button className="btn btn-danger" onClick={(e)=>{logoutbtn()}}>Logout</button>
        </div>
    )
}

export default Dashboard
