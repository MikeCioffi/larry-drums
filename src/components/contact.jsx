import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import kit from '../assets/kit6.jpg'



const Contact = ({ id }) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ygs6twz', 'template_emkczgd', form.current, 'wq5MC9curmaJt8c79')
            .then((result) => {
                console.log(result.text);
                alert("Email sent successfully!");
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                alert("An error occurred, please try again.");
            });
    };

    return (
        <form
            className="min-h-[75vh] flex justify-center items-center"
            ref={form}
            onSubmit={sendEmail}
            id={id}
            style={{
                backgroundImage: `url(${kit})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div

                className='md:p-20 rounded-md w-full md:w-3/4 xl:w-1/2 
                 flex flex-col justify-center items-center
                 lg:transform lg:-skew-y-3 lg:-skew-x-1'
                style={{
                    backgroundImage: `linear-gradient(to top right, rgb(152,0,209,0.2), rgb(33,84,78,0.2))`,
                    backdropFilter: 'blur(40px)', // Adjust the pixel value to increase or decrease the blur effect
                    WebkitBackdropFilter: 'blur(40px)' // This line is for better compatibility with Safari on iOS
                }}>
                <div className=" w-full  lg:transform lg:skew-y-3 lg:skew-x-1 p-4"> {/* Reverse the skew */}
                    <h2 className=" text-5xl md:text-7xl w-full flex justify-center font-bold mb-4 border-b-8 border-slate-400 p-4"
                        style={{ color: 'rgba(255, 255, 255, 0.5  )' }}> Lets Connect!</h2> {/* Adjusted text color for readability */}                <label htmlFor="user_name" className="text-white mb-2">Name</label>
                    <input
                        type="text"
                        name="user_name"
                        className="text-black mb-4 p-2 bg-white bg-opacity-50 rounded-md w-full"
                    />
                    <label htmlFor="user_email" className="text-white mb-2">Email</label>
                    <input
                        type="email"
                        name="user_email"
                        className="text-black mb-4 p-2 bg-white bg-opacity-50 rounded-md w-full"
                    />
                    <label htmlFor="message" className="text-white mb-2">Message</label>
                    <textarea
                        name="message"
                        className="text-black mb-4 p-2 bg-white bg-opacity-50 rounded-md w-full"
                        rows="4"
                    />
                    <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
                    >
                        Send
                    </button>
                </div>
            </div>
        </form>

    );
};

export default Contact;