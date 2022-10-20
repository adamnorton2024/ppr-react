import React, { useRef } from 'react';
import { Col, Row, Form} from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';


export const ContactForm = () => {
    const form = useRef();
    const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(`contact_service`, `contact_template_3u2h45j`, form.current, 'M3NCbTvJ0DdkA_nMy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
        
        navigate('/compensation/thankyou');
    };


    return (
        <div>
            <Form ref={form} onSubmit={sendEmail}>
                <Row>
                    <Col>
                        <label for="user_name">Name</label>
                        <input name="user_name" type='text' className="form-control" placeholder='Name' />
                    </Col>
                    <Col>
                        <label for="user_email">Email</label>
                        <input name='user_email' type='text' className="form-control" placeholder='email' />
                    </Col>
                </Row>
                <Row>
                    <Col className='mt-5'>
                        <label for="message">Message</label>
                        <textarea className='form-control' name='message' placeholder='Enter your message here...'></textarea>
                    </Col>
                </Row>
                <button type="submit" class="btn btn-primary mt-3">Submit</button>
            </Form>
        </div>
        
    );
};


{/* <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type='submit' value="Send" /> */}