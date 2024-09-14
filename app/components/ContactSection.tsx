'use client';
import React from 'react';
import { Button, Input, Textarea } from "@nextui-org/react";
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { UserIcon } from "@heroicons/react/24/solid";

const ContactSection = () => (
    <div className="min-h-screen max-w-screen-lg w-full mx-auto flex flex-col justify-center items-center px-4 py-8">
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

const ContactForm = () => (
    <form className="space-y-6">
        <Input
            isClearable
            type="text"
            label="Name"
            variant="bordered"
            className="w-full"
        />
        <Input
            isClearable
            type="email"
            label="Email"
            variant="bordered"
            className="w-full"
        />
        <Textarea
            label="Message"
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
    </form>
);

export default ContactSection;