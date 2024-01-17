import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import LightSpeed from 'react-reveal/LightSpeed';
import group_1 from "../../../images/WhatsApp Image 2024-01-11 at 21.30.15_0276f379.jpg"
import group_2 from "../../../images/group-2.jpg"
import group_3 from "../../../images/group-3.jpg"
import group_4 from "../../../images/group-4.jpg"
import group_5 from "../../../images/group-5.jpg"
import group_6 from "../../../images/group-6.jpg"
import group_7 from "../../../images/group-7.jpg"
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';

export default function PersonalSkill() {
    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
    }

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
    }
    const buttonStyle = {
        width: "30px",
        background: 'none',
        border: '0px'
    };
    
    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
        nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
    }
    const slideImages = [
        {
            url: group_1,
        },
        {
            url: group_2,
        },
        {
            url: group_3,
        },
        {
            url: group_4,
        },
        {
            url: group_5,
        },
        {
            url: group_6,
        },
        {
            url: group_7,
        },
    ];
    return (
        <div>
            <div className="mt-5 d-flex flex-row justify-content-center">
                <Link className="btn btn-primary me-3" to="/technicalSkill">Technical Skill</Link>
                <Link className="btn btn-primary me-3" to="/personalskill">Personal Skill</Link>
                <Link className="btn btn-primary " to="/toolkit">Toolkit</Link>
            </div>
            <LightSpeed left cascade>
                <h1 className="mt-4">Personal Skills</h1>
            </LightSpeed>
            <div className="mt-4">
                <Container>
                    <Row className='g-5'>
                        <Col md={4}>
                            <h1 style={{ fontSize: '100px', color: '#fe3e57', fontWeight: 700 }}>75%</h1>
                            <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                                <div class="progress">
                                    <div role={"progressbar"} id={"com"} aria-valuenow={"75"} aria-valuemin={"0"} aria-valuemax={"100"} style={{ width: '75%' }}>

                                    </div>
                                </div>
                                <h2 style={{ color: '#fe3e57', fontSize: '25px', marginTop: '13px', fontWeight: 700 }}>Communication Skills</h2>
                            </div>
                        </Col>
                        <Col md={4}>
                            <h1 style={{ fontSize: '100px', color: '#54faae', fontWeight: 700 }}>85%</h1>
                            <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                                <div class="progress">
                                    <div role={"progressbar"} id={"pm"} aria-valuenow={"85"} aria-valuemin={"0"} aria-valuemax={"100"} style={{ width: '85%' }}>
                                    </div>
                                </div>
                                <h2 style={{ color: '#54faae', fontSize: '25px', marginTop: '13px', fontWeight: 700 }}>Project Management</h2>
                            </div>
                        </Col>
                        <Col md={4}>
                            <h1 style={{ fontSize: '100px', color: '#ff8c2f', fontWeight: 700 }}>81%</h1>
                            <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                                <div class="progress">
                                    <div role={"progressbar"} id={"ps"} aria-valuenow={"81"} aria-valuemin={"0"} aria-valuemax={"100"} style={{ width: '81%' }}>

                                    </div>
                                </div>
                                <h2 style={{ color: '#ff8c2f', fontSize: '25px', marginTop: '13px', fontWeight: 700 }}>Problem Solving</h2>
                            </div>
                        </Col>
                        <Col md={4}>
                            <h1 style={{ fontSize: '100px', color: '#f1f965', fontWeight: 700 }}>77%</h1>
                            <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                                <div class="progress">
                                    <div role={"progressbar"} id={"aa"} aria-valuenow={"77"} aria-valuemin={"0"} aria-valuemax={"100"} style={{ width: '77%' }}>
                                    </div>
                                </div>
                                <h2 style={{ color: '#f1f965', fontSize: '25px', marginTop: '13px', fontWeight: 700 }}>Analytical Abilities</h2>
                            </div>
                        </Col>
                        <Col md={4}>
                            <h1 style={{ fontSize: '100px', color: '#ff0173', fontWeight: 700 }}>87%</h1>
                            <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                                <div class="progress">
                                    <div role={"progressbar"} id={"org"} aria-valuenow={"87"} aria-valuemin={"0"} aria-valuemax={"100"} style={{ width: '87%' }}>

                                    </div>
                                </div>
                                <h2 style={{ color: '#ff0173', fontSize: '25px', marginTop: '13px', fontWeight: 700 }}>Organization</h2>
                            </div>
                        </Col>
                        <Col md={4}>
                            <h1 style={{ fontSize: '100px', color: '#39c4ff', fontWeight: 700 }}>79%</h1>
                            <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                                <div class="progress">
                                    <div role={"progressbar"} id={"cr"} aria-valuenow={"79"} aria-valuemin={"0"} aria-valuemax={"100"} style={{ width: '79%' }}>
                                    </div>
                                </div>
                                <h2 style={{ color: '#39c4ff', fontSize: '25px', marginTop: '13px', fontWeight: 700 }}>Creativity</h2>
                            </div>
                        </Col>
                        <Col md={12}>
                        <h2 style={{ color: '#54faae', fontSize: '40px', marginTop: '13px', fontWeight: 700 }}>Department President</h2>
                            <Slide {...properties} duration={2000 /* milliseconds */}>
                                {slideImages.map((slideImage, index) => (
                                    <div key={index}>
                                        <div style={{ ...divStyle, /*'backgroundImage': `url(${slideImage.url})` */ }}>
                                            <img src={slideImage.url} style={{ height: "400px", width: "auto" }} />
                                        </div>
                                    </div>
                                ))}
                            </Slide>


                        </Col>
                    </Row>
                </Container>

            </div>

        </div>
    )
}
