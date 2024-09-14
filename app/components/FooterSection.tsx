import React from 'react';
import { SocialIcon } from 'react-social-icons';
import FruitsAndVeggiesBackground from "@/app/components/aseets/FruitsAndVeggies";

const FooterSection = () => (
    <footer className="relative min-h-[300px] text-white">
        <FruitsAndVeggiesBackground />
        <div className="relative z-10 p-8 py-16 mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-shadow">Stay Connected</h2>
                    <p className="mb-4 text-shadow">Follow us on social media for the latest updates and offers.</p>
                    <div className="flex justify-center md:justify-start space-x-4 mb-8">
                        <SocialIcon url="https://facebook.com" />
                        <SocialIcon url="https://twitter.com" />
                        <SocialIcon url="https://instagram.com/cubangofreshproduce" />
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-shadow">Links</h2>
                    <ul>
                        <li><a href="#home" className="hover:underline text-shadow">Home</a></li>
                        <li><a href="#about" className="hover:underline text-shadow">About Us</a></li>
                        <li><a href="#fruits" className="hover:underline text-shadow">Fruits</a></li>
                        <li><a href="#vegetables" className="hover:underline text-shadow">Vegetables</a></li>
                        <li><a href="#exports" className="hover:underline text-shadow">Exports</a></li>
                        <li><a href="#contact" className="hover:underline text-shadow">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-shadow">Contact Us</h2>
                    <p className="mb-2 text-shadow">Email: <a href="mailto:tarah.shaanika@gmail.com" className="hover:underline text-shadow">tarah.shaanika@gmail.com</a></p>
                    <p className="mb-2 text-shadow">Phone: <a href="tel:+264818270037" className="hover:underline text-shadow">+264 818 270 037</a></p>
                    <p className="mb-4 text-shadow">Address: <span className="hover:underline text-shadow">123 Street Name, City</span></p>
                    <p>Designed and Built by <a href="https://www.instagram.com/moodboard.dsgn/" className="hover:underline" target="_blank" rel="noopener noreferrer">Moodboard Design</a></p>
                </div>
            </div>
        </div>
    </footer>
);

export default FooterSection;