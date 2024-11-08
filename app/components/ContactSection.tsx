'use client';
import React, { useState } from 'react';
import { Button, Input, Textarea } from "@nextui-org/react";
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { UserIcon } from "@heroicons/react/24/solid";

const ContactSection = () => (
    <div className="min-h-screen max-w-screen-lg w-full mx-auto flex flex-col justify-center items-center px-4 py-8" id='contact'>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Love to hear from you, Get in touch 👋</h2>
        <div className="flex flex-col sm:flex-row gap-8 w-full">
            <div className="flex-1  p-6 ">
                <ContactDetails />
            </div>
            <div className="flex-1 p-6">
                <ContactForm />
            </div>
        </div>
    </div>
);

const ContactDetails = () => (
    <div className="space-y-6">
        <ContactDetail
            Icon={UserIcon}
            label="Mr. Tarah Shaanika"
        />
        <ContactDetail
            Icon={PhoneIcon}
            label="+264 818 270 037"
            additionalInfo="+264 811 280 176"
        />
        <ContactDetail
            Icon={EnvelopeIcon}
            label="tarah.shaanika@gmail.com"
            additionalInfo="messshaanika36@gmail.com"
        />
    </div>
);

const ContactDetail = ({ Icon, label, additionalInfo }:{ Icon:any, label:any, additionalInfo?: any }) => (
    <div className="flex items-center space-x-4">
        <Icon className="w-6 h-6 text-gray-600" />
        <div>
            <div className="font-bold text-gray-700">{label}</div>
            {additionalInfo && <div className="text-gray-500">{additionalInfo}</div>}
        </div>
    </div>
);

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Email sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Failed to send email.');
            }
        } catch (error) {
            setStatus('An error occurred.');
        }
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
                isClearable
                type="text"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="bordered"
                className="w-full"
            />
            <Input
                isClearable
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="bordered"
                className="w-full"
            />
            <Textarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="bordered"
                placeholder="Enter your Message"
                classNames={{
                    base: "w-full",
                    input: "resize-y min-h-[40px]",
                }}
            />
            <Button type="submit" color="warning" className="bg-orange-300 w-full">
                Just Send
                <svg className="ml-2 w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </Button>
            {status && <p className="text-center mt-4">{status}</p>}
        </form>
    );
};

export default ContactSection;