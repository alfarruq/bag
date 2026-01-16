import rasm1 from '../../assets/rasm.png'
import './style.css';

function SectionFour() {
  return (
    <section className="section-four">
      <div className="card-container">
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600" alt="Backpack" />
        </div>

       
        <div className="card-content">
          <h2>Lorem Ipsum Dolor Sit Amet Adipiscing Elit.</h2>
          <form className="join-form">
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <input type="text" placeholder="Address" className="full-width" />
            
            <div className="form-footer">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Lorem Ipsum Dolor Sit Amet.
              </label>
              <button type="submit" className="join-btn">Join Now</button>
            </div>
          </form>
        </div>
      </div>

      <div className="brands-container">
        <img src={rasm1} alt="" />
      </div>
    </section>
  );
}

export default SectionFour;



