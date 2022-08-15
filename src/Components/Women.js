import { Link } from "react-router-dom";
function Women() {
    return ( 
        <>
            <div class="dropdown-content1">
                     <div className="main">
                     <div className="left">
                          <h6><Link  className="inner-link" to="#">ETHNIC WEAR</Link><br/></h6>
                        <Link  className="inner-link" to="#">Sarees</Link><br/>
                        <Link  className="inner-link" to="#">Kurtas&Kurtis</Link><br/>
                        <Link  className="inner-link" to="#">Salwar Suits</Link><br/>
                        <Link  className="inner-link" to="#">Lehangas</Link><br/>
                        <Link  className="inner-link" to="#">Salware&Lengginges</Link><br/>
                        <Link  className="inner-link" to="#">Blouses</Link><br/>
                      </div>
                      <div className="right">
                          <h6><Link  className="inner-link" to="#">WESTEN WEAR</Link><br/></h6>
                        <Link  className="inner-link" to="#">Sport Shoes</Link><br/>
                        <Link  className="inner-link" to="#">casual Shoes</Link><br/>
                        <Link  className="inner-link" to="#">Formal Shoes</Link><br/>
                        <Link  className="inner-link" to="#">Sneakers</Link><br/>
                        <Link  className="inner-link" to="#">shoees Simple</Link><br/>
                        <Link  className="inner-link" to="#">casual Shoes</Link><br/>
                      </div>
                      <div className="last">
                        <img className="img-hover" src="./women.jpeg"/>
                      </div>
                     </div>
                      
                    </div>
        </>
     );
}

export default Women;