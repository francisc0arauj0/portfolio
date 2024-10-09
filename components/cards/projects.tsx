"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import { useRouter } from 'next/navigation'

const ProjectsList = [
    { name: "Portfolio", href: "https://github.com/francisc0arauj0/portfolio", description: "My Portfolio" },
]

const Projects = () => {

    const router = useRouter();
    
    const HandleRedirect = (href: string) => {
        router.push(href)
    }

    return (
        <div className="flex justify-center pt-10">
            <Card className="w-[55ex] rounded-none sm:rounded-lg bg-transparent sm:bg-card-foreground/5 border-none">
                <CardHeader>
                    <CardTitle>Projects</CardTitle>
                    <CardDescription>All my projects listed here.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Carousel className="w-[270px] sm:w-full">
                        <CarouselContent>
                            {ProjectsList.map((item) => (
                                <CarouselItem key={item.name}>
                                    <Card className="rounded-lg bg-card-foreground/5 border-none">
                                        <CardHeader>
                                            <CardTitle>{item.name}</CardTitle>
                                            <CardDescription>{item.description}</CardDescription>
                                        </CardHeader>
                                        <CardFooter>
                                            <Button className="w-full" onClick={() => HandleRedirect(item.href)}>More</Button>
                                        </CardFooter>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </CardContent>
            </Card>
        </div>
    )
}

export default Projects;
