import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from "../Redux/Actions/userActions";
// import Footer from './Footer';

const LoginUser = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    const dispatch = useDispatch();
    const luserdataselec = useSelector(state => state.loginUser);
    const { luser } = luserdataselec;

    const onlogin = async(e) => {
        e.preventDefault();
        if(!email || !password){
            alert("Fields Cannot Be Empty!");
        }
        else{
            dispatch(loginUserAction({
                email:email,
                password:password
            }))
        }
    }

    useEffect(() => {
        if(luser){
            console.log("UseEffect is eexecuting: ",luser);
            localStorage.setItem("token",luser.token);
            localStorage.setItem("name",luser.user.name);
            localStorage.setItem("email",luser.user.email);
            localStorage.setItem("address",luser.user.address);
            history.push("/dashboard");
        }
    }, [luser])

    // const style = {
    //     "margin-top":"225px",
    //     "backgroundColor": "rgba(0, 0, 0, 0.2)"
    // }

    
    return (
        <div>
            <div className="container my-3">
            <h1>Login Here!</h1>
            <form onSubmit={onlogin} style={{"display":"inline-table","width":"500px"}}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email Address</label>
                <input type="email" className="form-control" value={email} name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" autoComplete="on"/>
            </div>
            <button type="submit" className="btn btn-primary my-3">Login</button>
            </form>
            </div>
            {/* <Footer style={style}/> */}
        </div>
    )
}

export default LoginUser
