"use client";

import { House, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isMounted, setIsMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <header className="flex justify-center items-center sm:mt-10">
            <nav className="w-[55ex] p-4 transition-all bg-transparent sm:bg-card-foreground/5 flex justify-between items-center rounded-none sm:rounded-lg">
                <Button variant="ghost" className="hover:bg-transparent hover:text-light">
                    <House />
                </Button>
                <h1 className="font-medium">Francisco</h1>
                <Button variant="ghost" className="hover:bg-transparent hover:text-light" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                    {theme === "light" ? <Moon/> : <Sun />}
                </Button>
            </nav>
        </header>
    )
}

export default Navbar;