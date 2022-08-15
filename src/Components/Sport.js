import { Link } from "react-router-dom";
function Sport() {
    return ( 
        <>
            <div class="dropdown-content1">
                     <div className="main">
                     <div className="left">
                          <h6><Link  className="inner-link" to="#">SPORTS</Link><br/></h6>
                        <Link  className="inner-link" to="#">Running</Link><br/>
                        <Link  className="inner-link" to="#">Cricket</Link><br/>
                        <Link  className="inner-link" to="#">Kids Cycles</Link><br/>
                        <Link  className="inner-link" to="#">Adult Cycles</Link><br/>
                        <Link  className="inner-link" to="#">BcketBall</Link><br/>
                        <Link  className="inner-link" to="#">Football</Link><br/>
                      </div>
                      <div className="right">
                          <h6><Link  className="inner-link" to="#">GET READY FROM GYM</Link><br/></h6>
                        <Link  className="inner-link" to="#">sports Fotwear</Link><br/>
                        <Link  className="inner-link" to="#">Sippers</Link><br/>
                        <Link  className="inner-link" to="#">Gym Gloves</Link><br/>
                        <Link  className="inner-link" to="#">Sports Nutrition</Link><br/>
                        <Link  className="inner-link" to="#">Gym Bags</Link><br/>
                        <Link  className="inner-link" to="#">Fitness Gadgets</Link><br/>
                      </div>
                      <div className="last">
                        <img className="img-hover" src="./sport.jpg"/>
                      </div>
                     </div>
                      
                    </div>
        </>
     );
}

export default Sport;