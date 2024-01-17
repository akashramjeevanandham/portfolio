import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import axios from "axios";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contactus() {
  const [formData, setFormData] = useState(new FormData());

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      alert("Something went wrong!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/submitForm",
        formData
      );
      console.log(response.data.message); // Log the response from the backend

      alert(`Thanks ${formData.name}, I will shortly connect with you!`);
    } catch (error) {
      console.error("Error submitting the form:", error);

      alert("Backend Server was not Running while submitting the form.");
    }

    setFormData({});
  };

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Contact me</h1>
              </Zoom>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                {/*<Col md={4}>
                  <div className="contacts-form" data-aos="fade-up">
                    <form>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="username" className="label-class">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-input input-class"
                          id="username"
                          name="name"
                          aria-describedby="emailHelp"
                          placeholder="Enter your name"
                          value={formData.name || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="email" className="label-class">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-input input-class"
                          name="email"
                          id="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          value={formData.email || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="userMessage" className="label-class">
                          Message
                        </label>
                        <textarea
                          className="form-message input-class"
                          id="userMessage"
                          name="message"
                          rows="3"
                          placeholder="Enter message"
                          value={formData.message || ""}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="submit-btn">
                        <button
                          type="submit"
                          className="submitBtn"
                          onClick={handleSubmit}
                        >
                          Submit
                          <AiOutlineSend className="send-icon" />
                        </button>
                      </div>
                    </form>
                  </div>
                </Col> */}
                <Col md={7}>
                  <div className="contacts-details">
                    <a
                      href={`mailto:akashramjeevanandham@gmail.com`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                       akashramjeevanandham@gmail.com
                      </p>
                    </a>
                    <a
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiPhone />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>+65 86168413</p>
                    </a>
                    <a
                      href="https://www.google.com/maps/place/Block+293+HDB+Tampines/@1.350384,103.954962,18z/data=!4m6!3m5!1s0x31da3d1bf4c40d17:0x1c1904714705e46!8m2!3d1.350384!4d103.9549617!16s%2Fg%2F12hlrxr8z?hl=en&entry=ttu"
                      className="personal-details"
                    >
                      <div className="personal-details">
                        <div className="detailsIcon">
                          <HiOutlineLocationMarker />
                        </div>
                        <p style={{ color: "#fbd9ad" }}>
                          Blk 293 Tampines Street 22, Singapore 520293 , #05-496
                        </p>
                      </div>
                    </a>
                  </div>
                </Col>
                <Col md={4}>
                <div className="contact-map">
                
                    <iframe
 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1400.2636479556957!2d103.95470031073864!3d1.3508793056461472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d1bf4c40d17%3A0x1c1904714705e46!2sBlock%20293%20HDB%20Tampines!5e0!3m2!1sen!2ssg!4v1704700196441!5m2!1sen!2ssg"                      allowFullScreen=""
                      aria-hidden="false"
                      title="Contact Me"
                      tabIndex="0"
                      loading="lazy"
                      className=""
                      style={{ width: "400px", height: "400px",marginTop:"-60px" }}
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}





