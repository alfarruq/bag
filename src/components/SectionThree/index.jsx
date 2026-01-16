import './style.css';
import humik from "../../assets/humoyunQ.png"

function SectionThree() {
    return (
        <section className="hum-section-three">
            <div className="hum-container">
                <div className="hum-content-wrapper">
                    
                    {/* Chap tomondagi rasm qismi */}
                    <div className="hum-image-grid">
                       <img className='humm' src={humik} alt="" />
                    </div>

                    {/* O'ng tomondagi matn qismi */}
                    <div className="hum-text-content">
                        <h5 className="hum-subtitle">CREATIVE BAG ONLY FOR YOU.</h5>
                        <h1 className="hum-title">
                            Lorem Ipsum Dolor Sit Amet <br />
                            Consectetur Adipiscing Elit <br />
                            Sed Do Eiusmod.
                        </h1>
                        <p className="hum-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam.
                        </p>
                        <button className="hum-btn-more">See More</button>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default SectionThree;