import "./Home.css"
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import { Link, useNavigate } from 'react-router-dom';
import DropHome from "./DropHome";
import Women from "./Women";
import Kitchen from "./Kitchen";
import Kids from "./Kids";
import Computer from "./Computer";
import Electronic from "./Electronic";
import Sport from "./Sport";
function Home() {
  const navigate=useNavigate();
  const data = [

    {
      img: "./silde1.jpg",
      caption1: " SAVE UPTO 30%",
      caption2: "FASHIONABLE PRICE"
    },
    {
      img: "./silde2.jpg",
      caption1: " SAVE UPTO 50%",
      caption2: "FASHIONABLE CLOTHS"
    },
  ]
  console.log(data);
  return (
    <>
      <div className="main-slide-container">
        <div className="dropdwon-container">
          <div class="dropdown">
            <div class="drop">
              <img className="img-small"  src="./men.jpg"/>
              <Link className="main-link" to="#">Men's Fashion
                <DropHome></DropHome>
              </Link>
            </div>
            <div class="drop">
              <img className="img-small" src="./women.jpeg" />
              <Link className="main-link" to="#">Women's Fashion
                <Women></Women>
              </Link>
            </div>
            <div class="drop">

              <img className="img-small" src="./kitchen.jpg" />
              <Link className="main-link" to="#">Home&Kitchen
                <Kitchen></Kitchen>
              </Link>
            </div>
            <div class="drop">
              <img className="img-small" src="./kid1.jpg" />
              <Link className="main-link" to="#">TOYS.Kids'Fashion
                <Kids></Kids>
              </Link>
            </div>
            <div class="drop">
              <img className="img-small" src="./computer.jpg" />
              <Link className="main-link" to="#">Computers&Gaming
                <Computer></Computer>
              </Link>
            </div>
            <div class="drop">
              <img className="img-small" src="./electronic.jpg" />
              <Link className="main-link" to="#">Electronice
                <Electronic></Electronic>
              </Link>
            </div>
            <div class="drop">
              <img className="img-small" src="./sport.jpg" />
              <Link className="main-link" to="#">Sports&Fitness
                <Sport></Sport>
              </Link>
            </div>
            <div class="drop">
              <img className="img-small" src="./sport.jpg" />
              <Link className="main-link" to="#">Sports&Fitness
                <Sport></Sport>
              </Link>
            </div>
          </div>
        </div>
        <div className="slide-container">
          <Slide>
            {data.map((imge, index) => (
              <div className="each-slide" key={index}>
                <div className="home-slider" style={{ 'backgroundImage': `url(${imge.img})` }}>
                  <span className="text-medail">{imge.caption1}</span><br />
                  <span className="text-medail1">{imge.caption2}</span>
                  <button onClick={()=>navigate('/product')} className="home-btn">Show More</button> 
                </div>
               
              </div>
            ))}
          </Slide>
           
        </div>
      </div>

      <div className="second"></div>
      <h6 className="home-heading">WHY SHOP WHITUS</h6>
      <hr className="horigontal-line" />

      <div className="second-part">
        <div className="inner-sec">
          <img className="second-img" src="./securePay.png" />
          <h6>100% SECURE<br /> PAYMENT</h6>
          <p>Moving your card detalis to much more secured place</p>
        </div>
        <div className="inner-sec">
          <img className="second-img" src="./help.png" />
          <h6>HELPCENTER</h6>
          <p>Got quetion? Look no further.Browse our FAQ and submit your query here</p>
        </div>
        <div className="inner-sec">
          <img className="second-img" src="./fast-delivery.jpg" />
          <h6>FAST DELIVRY</h6>
          <p>We live to save time,Get your package when you need it most</p>
        </div>
        <div className="inner-sec">
          <img className="second-img" src="./phone.webp" />
          <h6>SHOP ON GO</h6>
          <p>Dowonload the app and getexciting app only offer you at your fingertips</p>
        </div>
      </div>

    </>
  );
}

export default Home;






