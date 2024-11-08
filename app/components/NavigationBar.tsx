'use client'
import React from "react";
import {
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import CubangoLogo from "@/app/components/aseets/CubangoLogo";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        {name: "Home", link: "#home"},
        {name: "About Us", link: "#aboutSection"},
        {name: "Our Products", link: "#products"},
        {name: "Exports", link: "#exports"},
        {name: "Contact", link: "#contact"},
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred={true} >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <CubangoLogo/>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link color={"foreground"} href={item.link}>
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* Mobile Menu Items */}
            <NavbarMenu className={"pt-4"}>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={index}>
                        <Link color={'foreground'} href={item.link} className="p-2 w-full">
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}