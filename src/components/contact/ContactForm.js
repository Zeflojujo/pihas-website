import "./ContactFormStyles.css";
import "./AboutUsStyles.css";
import swal from 'sweetalert';
import { CiLocationOn } from 'react-icons/ci';
import { useState } from "react";
import axios from 'axios';

function ContactForm () {

    const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const handleContactMessage = async (e) => {
    e.preventDefault();
    const contactMessage = {
         name,
         email,
         phone,
         msg
    }

    console.log(email, name, phone, msg)

    try{
        await axios.post('http://127.0.0.1:3500/messages', contactMessage)
        .then((response) => {
            console.log(response);

            swal({
                title: "Good job!",
                text: "Message sent successfully!",
                icon: "success",
                button: "Aww yess!",
              });
    
            setName("");
            setEmail("");
            setPhone("");
            setMsg("");
        })
        .catch((error) => {
            alert("Message send error", error);
            console.log(error.response.data.message);
        })
    }catch(err){
        console.log(err)
    }

    
    
  }

    return (
        <>
        <div className="main-container">

        <div className="heading" >
                <h1 style={{display: "flex", justifyContent: "center", alignContent: "center", margin: "auto", marginBottom: "1rem", color: "#645e08", fontSize: "2rem"}}>CONTACT US</h1>
                <p style={{display: "flex", justifyContent: "center", alignContent: "center", margin: "auto", fontStyle: "italic"}}>( You can reach and communicate with us via. )</p>
            </div>
            <hr className="horizontalLine"/>

            <div className="form-container">
                <div className="form-contact">

                    <h3 className="head" style={{display: "flex", justifyContent: "center", alignContent: "center", margin: "auto", marginBottom: "1.7rem", color: "#a19810"}}>MESSAGE TO PIHAS COLLEGE</h3>

                    <form>
                        <label htmlFor="name">Name:</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter Name..."
                            required
                         />

                        <label htmlFor="email">Email:</label>
                        <input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Enter Email..."
                            required
                        />

                        <label htmlFor="phone">Phone:</label>
                        <input 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Enter Phone..."
                            required
                        />

                        <label htmlFor="msg">Message:</label>
                        <textarea 
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                            type="text"
                            id="msg"
                            name="msg"
                            placeholder="Enter Message..."
                            required
                            rows={4}
                        ></textarea>
                        <button onClick={(e) => handleContactMessage(e)}>Send Message</button>
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

                        <h3 style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", paddingBottom: "1rem", color: "#a19810"}}>WHERE WE ARE?</h3>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.4025849995487!2d35.42032427495635!3d-10.625799617073719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18fcf19ae4c8031d%3A0x979edd1c5e7c6b2b!2sPERAMIHO%20INSTITUTE%20OF%20HEALTH%20AND%20ALLIED%20SCIENCES!5e0!3m2!1sen!2stz!4v1698174875521!5m2!1sen!2stz" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" title="LocationMap" referrerPolicy="no-referrer-when-downgrade"></iframe>

                        <div className="mt-3">
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