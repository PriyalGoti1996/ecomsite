import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {  useNavigate } from "react-router-dom"
function Details() {
    const [showmore,setshowmore]=useState(false)
    const nav=useNavigate()
    const [show,setshow]=useState({})
    let {id}=useParams()
    console.log(id);
   
   
   useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>{
        setshow(res.data)
        console.log("detalis page data",res.data);
    }).catch((e)=>{
        console.log(e);
    })
   },[])
    console.log(show);
    return ( 
        <div className="detalis-main-div">
             <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={show.image} alt="Card image cap" height="300px" />
                <div className="card-body">
                  <h5 className="card-title">Title:{show.title}</h5>
                  <p className="card-text">{showmore? show.description:show.description?.substring(0,100)}
                  <span className="details-span" onClick={()=>setshowmore(!showmore)}>{showmore?"...less":"...more"}</span>
                  </p>
                  <h5 className="card-title">price <span>{show.price}</span></h5>
                  <button className="btn btn-primary" onClick={()=>{nav("/product")}}>GO To Product</button><br/><br/>
              </div>
              </div>
        </div>
     );
}

export default Details;