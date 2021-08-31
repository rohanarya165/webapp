import React from 'react'
import { NavLink } from 'react-router-dom'
//import web from "../src/image/image.svg.jpg"

export default function Common(props) {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name} <br /><strong><a href="https://drive.google.com/file/d/1-zkLOm5of_M5vn_qS9pj--OwsOfMohS3/view?usp=sharing" target="_blank" className="brand-name">AryA</a></strong></h1>
                                    <h2 className="my-3"> We are the team of talented developer making websites</h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn-get-started "> {props.btnname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src="http://wallup.net/wp-content/uploads/2017/03/27/405070-heart-digital_art-minimalism-white_background-trees-flowers-insect-blossom-colorful-butterfly.jpg" className="img-fluid animated" alt="Home img" />

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
