import axios from "axios";
import { useState } from "react";

function Signup() {
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleinput = (e) => {
    const { name, value } = e.target
    setdata({
      ...data,
      [name]: value
    })
  }
  // console.log(data)

  const handleSubmit= async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8000/user/add",data)
    .then((res)=>{
      console.log(res);
    }).
    catch((e)=>{
      console.log(e);
    })
    setdata({
      username: "",
    email: "",
    password: ""
    })
  }
  
  return (
    <div className="smain-div">
      <h1>Sign up</h1>
      <form>
      <input type={"text"} name="username" placeholder="Enter Name" className="s-input" onChange={handleinput} value={data.userName} /><br /><br />
      <input type={"text"} name="email" placeholder="Enter Email" className="s-input" onChange={handleinput} value={data.email} /><br /><br />
      <input type={"password"} name="password" placeholder="Enter password" className="s-input" onChange={handleinput}  value={data.password}/><br /><br />
      <button onClick={handleSubmit} className="btn-signup">Submit</button>
      </form>
      
    </div>
  );
}

export default Signup;