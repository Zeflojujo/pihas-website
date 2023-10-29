import "./ContactFormStyles.css";
import "./AboutUsStyles.css";
import { CiLocationOn } from 'react-icons/ci';

function ContactForm () {
    return (
        <>
        <div className="main-container">

        <div className="heading" >
                <h1 style={{display: "flex", justifyContent: "center", alignContent: "center", margin: "auto", marginBottom: "1rem", color: "#645e08"}}>CONTACT US</h1>
                <p style={{display: "flex", justifyContent: "center", alignContent: "center", margin: "auto"}}>You can reach us via.</p>
            </div>
            <hr className="horizontalLine"/>

            <div className="form-container">
                <div className="form-contact">

                    <h3 className="head" style={{display: "flex", justifyContent: "center", alignContent: "center", margin: "auto", marginBottom: "1.7rem", color: "#a19810"}}>MESSAGE TO PIHAS COLLEGE</h3>

                    <form>
                        <span>Name:</span>
                        <input placeholder="Name"/>

                        <span>Email:</span>
                        <input placeholder="Email"/>

                        <span>Phone:</span>
                        <input placeholder="Phone"/>

                        <span>Message:</span>
                        <textarea placeholder="message" rows={4}></textarea>
                        <button>Send Message</button>
                    </form>

                </div>

                <div className="container" style={{justifyContent: "space-between", display: "flex", flexDirection: "column", backgroundColor: "#fff", padding: "1rem", borderRadius: "2rem"}}>
                    <div className="location" style={{display:"flex", flexDirection: "row", justifyContent: "flex-start"}}>
                        <div>
                            <CiLocationOn size={30} color="#ccc" width="100%"/>
                        </div>
                        <div>
                            <h2>Location:</h2>
                            <p><strong>Address:</strong> P.O.BOX 93, PERAMIHO -TANZANIA</p>
                            <p><strong>Region:</strong> Ruvuma</p>
                            <p><strong>Destrict: </strong>Songea - Peramiho</p>
                        </div>
                        
                    </div>


                    <div className="map">
                        {/* <h2>Contacts</h2>
                        <p>Email: info@pihas.ac.tz</p>
                        <p>Phone1: +255-765-117-145</p>
                        <p>Phone1: +255-765-117-145</p> */}

                        <h3 style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", paddingBottom: "1rem", color: "#a19810"}}>WHERE WE ARE?</h3>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.4025849995487!2d35.42032427495635!3d-10.625799617073719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18fcf19ae4c8031d%3A0x979edd1c5e7c6b2b!2sPERAMIHO%20INSTITUTE%20OF%20HEALTH%20AND%20ALLIED%20SCIENCES!5e0!3m2!1sen!2stz!4v1698174875521!5m2!1sen!2stz" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                        <div>
                            <p>Located at Ruvuma, PERAMIHO - Morogoro,</p>
                            <p>Address : P.O.Box 93 PERAMIHO -TANZANIA,</p>
                            <p>Phone : +255765117145,</p>
                            <p>Email : info@pihas.ac.tz </p>
                            <p>Website : www.pihascollegeofhealthscience.ac.tz </p>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
            
        </>
        
    )
}

export default ContactForm;