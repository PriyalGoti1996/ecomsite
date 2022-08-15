import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { productapi, whishitem } from '../Action/productaction';
import 'font-awesome/css/font-awesome.min.css'
import { addtoWhishlist } from '../Reducer/productreducer';

function Product() {
  let header;
  let headers;
  const [update, setupdate] = useState(false)
  const dispatch = useDispatch()
  const pro = useSelector(state => state.prod)
  const finalproduct = pro.data;

  useEffect(() => {
    Getapidata()
  }, [])

  const Getapidata = async () => {
    header = localStorage.getItem("token")
    headers = { "token": header }
    const apidata = await axios.get("http://localhost:8000/product/all", { headers: headers })
      .catch((e) => {
        console.log(e);
      })
    setupdate(true)
    dispatch(productapi(apidata.data))
    console.log(apidata.data);
  }
  const allWhishList = (value) => {
    dispatch(whishitem(value))
  }
  return (
    <div className='row'>

      {
        update &&
        finalproduct?.map((value, index) => {
          return (
            <div className='product-container'>
              <div className="card" style={{ width: "18rem" }} key={index}>
                <Link className="card-link" to={(`/product/${value.id}`)}>
                  <img className="card-img-top" id="img-div" src={value.images} alt="Card image cap" />
                </Link>
                <div className="card-body">
                  <h6 className="card-title">{value.title}</h6>
                  <div>
                    <span>{value.colors.map((item, i) => {
                      return (
                        <h5><span>RS.{item.price}</span></h5>
                      )
                    })}</span>
                  </div>
                  <p className="whishlist-add"><i class="fa fa-heart-o" aria-hidden="true" onClick={() => allWhishList(value)} ></i></p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default Product;