import axios from "axios";
import { useState } from "react";
function ProductAdd() {
    let header
    let headers
    const [input, setInput] = useState({
        title: "", description: "", color: "", size: "", price: "",
    })
    const [file, setFile] = useState({
        image : ""
    })
    const inputhandler = (e) => {
        setInput({
            ...input, [e.target.name]: e.target.value
        })
    }
    const fileHandler = (e) => {
        setFile({image : e.target.files[0]})
    }
    const btnhandler = async (e) => {
        e.preventDefault()
        header = localStorage.getItem("token");
        headers = { 'token': header, 'Content-Type' : 'multipart/form-data' }
        let data = new FormData();
        data.append('image', file.image);
        data.append('title', input.title);
        data.append("description", input.description)
        data.append("color", input.color)
        data.append("size", input.size)
        data.append("price", input.price)
        console.log(data);
        await axios.post("http://localhost:8000/product/add", data, { headers: headers })
        .then((response) => {
            console.log(response.data);
        }).catch((e) => {
            console.log(e);
        })
    }
 
    return (
    <>
        <form onSubmit={btnhandler}>
            <input type={"text"} placeholder="title" name="title" onChange={inputhandler} /><br />
            <input type={"text"} placeholder="description" name="description" onChange={inputhandler} /><br />
            <input type={"file"} placeholder="images" name="images" onChange={fileHandler} /><br/>
            <input type={"text"} placeholder="colors" name="color" onChange={inputhandler} /><br />
            <input type={"text"} placeholder="sizes" name="size" onChange={inputhandler} /><br />
            <input type={"text"} placeholder="price" name="price" onChange={inputhandler} /><br />
            <button>submit</button>
        </form>
    </>
    );
}
export default ProductAdd;