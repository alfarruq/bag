
import './style.css';

function Footer() {
    return (
        <div className='Footer' >
            <div className="fayzbek-card">
                <h1 className='Fayzbek-h1' >Bag</h1>
                <p className='Fayzbek-p' >Lorem ipsum dolor sit amet <br/>
                   consectetur adipiscing <br/>
                   sed do eiusmod.</p>
            </div>
            <div className="fayzbek-card">
                <h3 className='Fayzbek-h3' >special catagories</h3>
                <p className='Fayzbek-p' >water resistant <br/>
                   charging system <br/>
                   artificial leather</p>
            </div>
            <div className="fayzbek-card">
                <h3 className='Fayzbek-h3' >Contact Us</h3>
                <p className='Fayzbek-p' >(808) 555-0111 <br/>
                   michelle.rivera@example.com <br/>
                   http://www.codehow.com</p>
            </div>
            <div className="fayzbek-card">
                <h3 className='Fayzbek-h3' >News Latter</h3>
                <input className='Fayzbek-inp' placeholder=' Enter Your Email' type="text" /> <br/>
                <button className='Fayzbek-btn' >Subscribe</button>
            </div>
        </div>
    );
}

export default Footer;