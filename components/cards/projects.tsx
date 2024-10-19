"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Folder} from "lucide-react";
import { useRouter } from 'next/navigation'


const Projects = () => {

    const router = useRouter();

    const HandleRedirect = (href: string) => {
        router.push(href)
    }

    return (
        <div className="flex justify-center sm:mb-10">
            <Card className="w-[55ex] rounded-none sm:rounded-lg bg-transparent sm:bg-card-foreground/5 border-none">
                <CardHeader>
                    <CardTitle>Projects</CardTitle>
                    <CardDescription>All my projects listed here.</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button onClick={() => HandleRedirect("/projects")} className="w-full sm:w-32 gap-2">
                        <Folder className="w-4 h-4" />
                        Projects
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Projects;
