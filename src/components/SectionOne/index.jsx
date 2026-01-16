
import './style.css';
import gril from '../../assets/gril.png'
import dev from '../../assets/dev.png'
import Cta from '../../assets/Cta.png'
import bac from '../../assets/bac.png'
function SectionOne() {
    return (
     <section className="hero cont">
      <div className="left">
        <span className="tag">LOOK STYLISH BE STYLISH.</span>

        <h1>
          Look Stylish Be<br />
          <span><img src={dev} alt="" /></span>
        </h1>

        <p>
          Before starting this business you should have ideas
          about the market and products to compete with
          the existing businesses.
        </p>

        <button className="join-btn">Join Shop</button>
        
      </div>
<img className='rrr' src={Cta} alt="" />
      <div className="right">
       
        <div className="img-placeholder">
          <img className='dd' src={bac} alt="" />
          <img className='ww' src={gril} alt="" />
       </div>

       
      </div>
    </section>
    );
}

export default SectionOne;