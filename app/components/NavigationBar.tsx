'use client'
import React from "react";
import {
    Accordion, AccordionItem,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger, Input,
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
import {ChevronDownIcon} from "@heroicons/react/24/outline";
import {SearchIcon} from "@nextui-org/shared-icons";
import {useSearch} from "@/app/components/context/SearchProvider";


export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { searchQuery, setSearchQuery } = useSearch();


    const menuItems = [
        {name: "Home", link: "#home"},
        {name: "About Us", link: "#about"},
        {
            name: "Our Products",
            dropdown: [
                {name: "Fruits", link: "#fruits"},
                {name: "Vegetables", link: "#vegetables"}
            ]
        },
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
                        {item.dropdown ? (
                            <Dropdown>
                                <DropdownTrigger className="cursor-pointer flex items-center">
                                    <span className="flex items-center">
                                        {item.name} <ChevronDownIcon className="h-4 w-4 ml-1"/>
                                    </span>
                                </DropdownTrigger>
                                <DropdownMenu aria-label={item.name}>
                                    {item.dropdown.map((subItem, subIndex) => (
                                        <DropdownItem key={subIndex}>
                                            <Link color={"foreground"} href={subItem.link}>
                                                {subItem.name}
                                            </Link>
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        ) : (
                            <Link color={"foreground"} href={item.link}>
                                {item.name}
                            </Link>
                        )}
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent as="div" className="items-center" justify="end">
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<SearchIcon scale={18} />}
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </NavbarContent>

            {/* Mobile Menu Items */}
            <NavbarMenu className={"pt-4"}>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={index}>
                        {item.dropdown ? (
                            <Accordion isCompact>
                                <AccordionItem isCompact aria-label={"Our ProductSection"} title={"Our ProductSection"}>
                                    {item.dropdown.map((subItem, subIndex) => (
                                        <Link
                                            key={subIndex}
                                            color={'foreground'}
                                            href={subItem.link}
                                            className="block py-2 w-full"
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </AccordionItem>
                            </Accordion>
                        ) : (
                            <Link color={'foreground'} href={item.link} className="p-2 w-full">
                                {item.name}
                            </Link>
                        )}
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}