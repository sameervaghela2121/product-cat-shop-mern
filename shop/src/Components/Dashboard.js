import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserAction } from '../Redux/Actions/userActions';

const Dashboard = () => {
    var token = localStorage.getItem('token');
    var usersname = localStorage.getItem('name');
    const dispatch = useDispatch();
    const history = useHistory();

    const logoutbtn = (e) => {
        dispatch(logoutUserAction());
        history.push("/login");
    }

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
