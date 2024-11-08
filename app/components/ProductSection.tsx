'use client'
import React, { useState } from "react";
import { Button, Card, Image, Input, NavbarContent } from "@nextui-org/react";
import products from "@/app/components/data/Products";
import { useSearch } from "@/app/components/context/SearchProvider";
import {CardFooter} from "@nextui-org/card";
import {SearchIcon} from "@nextui-org/shared-icons";


export default function ProductSection() {
    const [filter, setFilter] = useState("All");
    const { searchQuery, setSearchQuery } = useSearch();


    const typeFilteredProducts = filter === "All"
        ? products
        : products.filter((product) => product.type === filter);

    const filteredProducts = typeFilteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="max-w-[1200px] my-24 mx-auto p-6" id={'products'}>
            <h1 className={`text-center text-3xl font-bold p-10`}>Our Products</h1>
            <div className="flex justify-center space-x-4 mb-6">
                <Button
                    color="warning"
                    className={`${filter === "All" ? "bg-orange-300 text-white" : "bg-gray-200"}`}
                    onClick={() => setFilter("All")}
                >
                    All
                </Button>
                <Button
                    color="warning"
                    className={`${filter === "Fruit" ? "bg-orange-300 text-white" : "bg-gray-200"}`}
                    onClick={() => setFilter("Fruit")}
                >
                    Fruits
                </Button>
                <Button
                    color="warning"
                    className={`${filter === "Vegetable" ? "bg-orange-300 text-white" : "bg-gray-200"}`}
                    onClick={() => setFilter("Vegetable")}
                >
                    Vegetables
                </Button>
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
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                    <Card key={product.id} className="relative overflow-hidden h-80"> {/* Fixed height */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent z-0 backdrop-blur-md" /> {/* Increased gradient */}
                        <Image
                            removeWrapper
                            alt={product.name}
                            className="w-full h-full object-cover"
                            src={product.image}
                        />
                        <CardFooter className="absolute bottom-0 left-0 right-0 p-4 z-10 flex-col bg-gradient-to-t from-black/80 to-transparent items-start">
                            <h4 className="text-white text-lg font-bold">{product.name}</h4>
                            <p className="text-white text-sm mt-2">{product.description}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}