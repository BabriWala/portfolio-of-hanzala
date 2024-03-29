"use client"
import React from 'react';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-2">
                <h1 className="sm:text-3xl text-2xl title-font mb-4 text-gray-900 font-bold">CONTACT ME</h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                    <div className="relative">
                        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    </div>
                    <div className="p-2 w-1/2">
                    <div className="relative">
                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    </div>
                    <div className="p-2 w-full">
                    <div className="relative">
                        <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    </div>
                    <div className="p-2 w-full">
                    <button className="flex my-3 mx-auto font-bold text-white bg-black rounded py-3 px-8 focus:outline-none shadow text-lg">SEND <SendIcon className='ml-2 my-auto'></SendIcon></button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;