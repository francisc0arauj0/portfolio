"use client";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";

const About = () => {

    const router = useRouter();
    
    const HandleRedirect = (href: string) => {
        router.push(href)
    }

    return (
        <div className="flex justify-center pt-10">
            <Card className="w-[55ex] rounded-none sm:rounded-lg bg-transparent sm:bg-card-foreground/5 border-none">
                <CardHeader>
                    <CardTitle>Hello there,</CardTitle>
                    <CardDescription>Everything you can know about me is on this page.</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button onClick={() => HandleRedirect("mailto:franciscocoelhoaraujo492000@gmail.com")} className="gap-2">
                        <Mail className="w-4 h-4"/>
                        Contact 
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default About;