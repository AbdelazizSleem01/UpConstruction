import React, { useRef } from 'react';
import"./Contact.css"
import emailjs from '@emailjs/browser';


export const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_tv7nn4p', 'template_hafp8hh', form.current, 'y9jyuQJ5gV82DaY9e')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

    
return (
    <>
    <section className='bg' id='CONTACT'>
        <div className='col-sm-12 title contact'>
            <h1 className='text-center'><span>Contact</span> </h1>
            <p className='text-center'>
            Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est
            <br /> eveniet deleniti fignissimos eos quam</p>
        </div>
        <div class="container Contact">
            <form  action="#" ref={form} onSubmit={sendEmail}>
                <div class="form-row name">
                    <div class="input-data ">
                        <input type="text" className='input1' required name='First Name'/>
                        <label for="">First Name</label>
                    </div>
                    <div class="input-data  ">
                        <input type="text" className='input1' required name='Last Name'/>
                        <label  for="">Last Name</label>
                    </div>
                </div>
                <div class="form-row name ">
                    <div class="input-data">
                        <input type="text" className='input1' required name='Email'/>
                        <label for="">Email </label>
                    </div>
                    <div class="input-data">
                        <input type="text" className='input1' required name='Website Name'/>
                        <label for="">Website </label>
                    </div>
                </div>
                <div class="form-row">
                    <div class="input-data textarea">
                        <textarea rows="10" cols="80" required name='message'></textarea>
                        <br />
                            <label for="">Write your message</label>
                            <br />
                    </div>
                </div>
                <div className='row'>
                <button id='submitBtn' className='btn mx-auto col-sm-12' >Submit</button>
                </div>
            </form>
        </div>
    </section>
    </>
)}

export default Contact