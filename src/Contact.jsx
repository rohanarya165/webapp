import { useState } from "react";
import React  from 'react';

export default function Contact() {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: ""
    });

    const InputEvent = (event) => {
        const {name,value} = event.target;

        setData((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}. My phone no. is ${data.phone}. my email id is ${data.email} and this is my message ${data.msg}`)
    };
    return (<>
        <div className="my-5">
            <h1 className="text-center"> <a href="https://drive.google.com/file/d/1-zkLOm5of_M5vn_qS9pj--OwsOfMohS3/view?usp=sharing" target="_blank" className="brand-name">Contact Us</a></h1>
        </div>

        <div className="container contact-div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" name="fullname" value={data.fullname} onChange={InputEvent} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Mobile number" name="phone" value={data.phone} onChange={InputEvent} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={data.email} onChange={InputEvent} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    </>
    )
}
