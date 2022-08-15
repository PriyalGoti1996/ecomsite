import { Link } from "react-router-dom";
function Computer() {
    return ( 
        <>
            <div class="dropdown-content1">
                     <div className="main">
                     <div className="left">
                          <h6><Link  className="inner-link" to="#">STORAGE</Link><br/></h6>
                        <Link  className="inner-link" to="#">External Hadrives</Link><br/>
                        <Link  className="inner-link" to="#">MemmoryCard</Link><br/>
                        <Link  className="inner-link" to="#">PenDrives</Link><br/>
                        <Link  className="inner-link" to="#">SSD</Link><br/>
  
                      </div>
                      <div className="right">
                          <h6><Link  className="inner-link" to="#">COMPUTERSACCESSORIES</Link><br/></h6>
                        <Link  className="inner-link" to="#">Keybord</Link><br/>
                        <Link  className="inner-link" to="#">Mouse</Link><br/>
                        <Link  className="inner-link" to="#">LaptoopSkins</Link><br/>
                        <Link  className="inner-link" to="#">WebCamps</Link><br/>
                        <Link  className="inner-link" to="#">CoolingPade</Link><br/>
                        <Link  className="inner-link" to="#">Extenstion cords</Link><br/>
                      </div>
                      <div className="last">
                        <img className="img-hover" src="./computer.jpg"/>
                      </div>
                     </div>
                      
                    </div>
        </>
     );
}

export default Computer;