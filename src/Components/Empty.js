import { Link, useNavigate } from 'react-router-dom';
import './Empty.css'
function Empty() {
    const nevigate=useNavigate();
    return (  
        <div className='main-empty'>
        {/* <div className='inner-empty'> */}
            <h4>Your Shopping Bag is Empty!</h4>
            <img className="img-empty" src="./empty.webp"/><br/>
            <Link className='link-continus' to="/product">Continuse Shopping</Link>
            <br/>
            <div className='empt-btn'>
                <button className='empty-login' onClick={()=>{nevigate('/login')}}>Sing in to your account</button>
                <button className='empty-singup' onClick={()=>{nevigate('/signup')}}>Sing in to your account</button>
            </div>

        {/* </div> */}
        
        </div>
    );
}

export default Empty;