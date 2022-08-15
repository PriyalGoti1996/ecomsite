import axios from "axios";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

function Login() {
    let token;
    const [data1, setdata1] = useState({
        email: "",
        password: ""
      })

      const handleinput1 = (e) => {
        const { name, value } = e.target
        setdata1({
          ...data1,
          [name]: value
        })
      }
      const handleSubmit1= async (e)=>{
        e.preventDefault();
        console.log("data");
        await axios.post("http://localhost:8000/user/login",data1)
        .then((res)=>{
          console.log(res.data);
          token=res.data.token;
          console.log(token);
          localStorage.setItem("token",token)

        }).
        catch((e)=>{
          console.log(e);
        })
        setdata1({
            ...data1,
            email: "",
        password: ""
        })
      }
      
    return ( 
        <div>
            <h1>Sign In</h1>
            <form>
            <input type={"text"} name="email" placeholder="Enter Email" className="s-input" onChange={handleinput1} value={data1.email} /><br /><br />
            <input type={"password"} name="password" placeholder="Enter password" className="s-input" onChange={handleinput1}  value={data1.password}/><br /><br />
            <button onClick={handleSubmit1} className="btn-signup">Submit</button>
            </form>
        </div>
     );
}

export default Login;