import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import Empty from './Empty';
import Profile from './Profile';
function Navbar() {

    const cartstate = useSelector(state => state.tocart)
    const cartcount = cartstate.length;
    console.log("count cartto item", cartcount);
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <Link className="nav-link" to='/'>Navbar</Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/product'>Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/cart'>Cart</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/whishlist'>WhishList</Link>
                            </li>

                            {/* <li className="nav-item">
                                <Link className="nav-link" id='login-li' to='/login'>Login</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to='/signup'>Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/productadd'>AddProduct</Link>
                            </li>
                            <div class="container-fluid">
                                <div class="container-fluid">
                                    <form class="d-flex" role="search">
                                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button class="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>

                            <li className="nav-item">
                                <div className='profile-home'>
                               
                                <i class="fa fa-user" aria-hidden="true" id="profile-font" ></i>
                                <Profile></Profile>
                                </div>
                                    
                            </li>
                            <li className="nav-item">
                                <div>
                                <Link to="/cart">
                                <i class="fa fa-shopping-bag" aria-hidden="true"  id="cart-img">{cartcount}</i></Link>
                                <i class="fa fa-bag-shopping" id="cart-img"></i>
                                </div>
                            </li>

                           
                        </ul>


                    </div>
                </nav>

            </div>

            <footer>

            </footer>
        </>
    );
}

export default Navbar;
