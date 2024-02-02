import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { HomeIcon } from "@radix-ui/react-icons"


const NavBar = () => {

    let navigate = useNavigate(); 

    const [queryText, setQueryText] = useState("");

    const handleClick = () => {
        if(queryText != "") {
            let path = 'search-results/' + queryText
            navigate(path)
        }
    }

    const navigateHome = () => {
        let path = '/';
        navigate(path);
    }

    return (
        <>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div className="flex w-full items-center space-x-2">
                        <Button onClick={navigateHome} variant="ghost" className="font-semibold text-xl text-gray-800 leading-tight"> 
                        Home &nbsp;
                        <HomeIcon className="mr-2 h-4 w-4" />
                        </Button>
                        <Input className="bg-neutral-200" placeholder="What would you like to cook?" onChange={(e) => setQueryText(e.target.value)}/>
                        <Button type="submit" onClick={handleClick}>Search</Button>
                    </div>
                </div>
            </header>
        </>

    )
}

export { NavBar }