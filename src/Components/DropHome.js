import { Link } from "react-router-dom";
function DropHome() {
    return (
        <>
            <div class="dropdown-content1"> 
                <div className="main">
                    <div className="left">
                        <h6><Link className="inner-link" to="#">FOOTWEAR</Link><br /></h6>
                        <Link className="inner-link" to="#">Sport Shoes</Link><br />
                        <Link className="inner-link" to="#">casual Shoes</Link><br />
                        <Link className="inner-link" to="#">Formal Shoes</Link><br />
                        <Link className="inner-link" to="#">Sneakers</Link><br />
                        <Link className="inner-link" to="#">shoeesSimple</Link><br />
                        <Link className="inner-link" to="#">casual Shoes</Link><br />
                    </div>
                    <div className="right">
                        <h6><Link className="inner-link" to="#">CLOTHING</Link><br /></h6>
                        <Link className="inner-link" to="#">T-Shirts & Polos</Link><br />
                        <Link className="inner-link" to="#">Shirts</Link><br />
                        <Link className="inner-link" to="#">Jeans</Link><br />
                        <Link className="inner-link" to="#">Trousers & Chinos</Link><br />
                        <Link className="inner-link" to="#">Innerwear & Sleepwear</Link><br />
                        <Link className="inner-link" to="#">Jackets</Link><br />
                    </div>
                    <div className="last">
                        <img className="img-hover" src="./men.jpg" />
                    </div>
                </div>

            </div>
        </>
    );
}

export default DropHome;