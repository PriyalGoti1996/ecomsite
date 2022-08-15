import { Link } from 'react-router-dom';
import './Profile.css'
function Profile() {
    return ( 
        <div className="profile-container">
        <div className="hading-pro">Hello Priyal</div>
        <div className="hading-pro">9904843545<hr/></div>
        <div className='div-link-pro' ><Link className='link-profile' to="/login">Login</Link></div>
        <div className='div-link-pro'><Link className='link-profile'  to ="/signup">Registration</Link></div>
        <div className='div-link-pro'><Link className='link-profile' to="#">Order</Link></div>
        <div className='div-link-pro' ><Link className='link-profile' to="whishlist">WhishList</Link></div>
        <div className='div-link-pro' ><Link className='link-profile' to="#">Gift Cards</Link></div>
        <div className='div-link-pro' ><Link className='link-profile' to="#">Contact Us</Link></div>
        <div className='div-link-pro' ><Link className='link-profile' to="signup">Edit Profile</Link></div>
        <div className='div-link-pro' ><Link className='link-profile' to="#">LogOut</Link></div>
        </div>
     );
}

export default Profile;