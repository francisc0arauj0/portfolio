import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

const FrontEndList = [
    { name: "HTML", value: 90 },
    { name: "CSS", value: 80 },
    { name: "JS", value: 50 },
]

const BackEndList = [
    { name: "C", value: 40 },
    { name: "C++", value: 10 },
    { name: "TS", value: 50 },
    { name: "PY", value: 60 },
]

const DevopsList = [
    { name: "Git", value: 80 },
    { name: "Github", value: 80 },
    { name: "Slack", value: 40 },
    { name: "Vscode", value: 80 },
]

const Skills = () => {
    return (
        <div className="flex justify-center pt-10">
            <Card className="w-[55ex] rounded-none sm:rounded-lg bg-transparent sm:bg-card-foreground/5 border-none">
                <CardHeader>
                    <CardTitle>My Skills</CardTitle>
                    <CardDescription>What I learned and what I'm learning in a 5 year radius</CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="front">
                        <TabsList>
                            <TabsTrigger value="front">Front</TabsTrigger>
                            <TabsTrigger value="back">Back</TabsTrigger>
                            <TabsTrigger value="devops">DevOps</TabsTrigger>
                        </TabsList>
                        <TabsContent value="front">
                            <Card className="bg-card-foreground/5 border-none">
                                <CardHeader>
                                    <CardTitle>Front</CardTitle>
                                    <CardDescription>All my front-end skills</CardDescription>
                                </CardHeader>
                                {FrontEndList.map((item) => (
                                    <CardContent className="flex flex-col gap-6">
                                        <div className="flex flex-row items-center row-span-2 justify-between">
                                            <h1 className="w-20">{item.name}</h1>
                                            <Progress className="h-2 bg-black/40" value={item.value} />
                                        </div>
                                    </CardContent>
                                ))}
                            </Card>
                        </TabsContent>
                        <TabsContent value="back">
                            <Card className="bg-card-foreground/5 border-none">
                                <CardHeader>
                                    <CardTitle>Back</CardTitle>
                                    <CardDescription>All my back-end skills</CardDescription>
                                </CardHeader>
                                {BackEndList.map((item) => (
                                    <CardContent className="flex flex-col gap-6">
                                        <div className="flex flex-row items-center row-span-2 justify-between">
                                            <h1 className="w-20">{item.name}</h1>
                                            <Progress className="h-2 bg-black/40" value={item.value} />
                                        </div>
                                    </CardContent>
                                ))}
                            </Card>
                        </TabsContent>
                        <TabsContent value="devops">
                            <Card className="bg-card-foreground/5 border-none">
                                <CardHeader>
                                    <CardTitle>Devops</CardTitle>
                                    <CardDescription>All my devops skills</CardDescription>
                                </CardHeader>
                                {DevopsList.map((item) => (
                                    <CardContent className="flex flex-col gap-6">
                                        <div className="flex flex-row items-center row-span-2 justify-between">
                                            <h1 className="w-20">{item.name}</h1>
                                            <Progress className="h-2 bg-black/40" value={item.value} />
                                        </div>
                                    </CardContent>
                                ))}
                            </Card>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    )
}

export default Skills