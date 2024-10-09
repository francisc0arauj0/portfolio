import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const Construction = () => {


    return (
        <div className="flex justify-center pt-10">
            <Card className="w-[55ex] rounded-none sm:rounded-lg bg-transparent sm:bg-card-foreground/5 border-none">
                <CardHeader>
                    <CardTitle>Under construction</CardTitle>
                    <CardDescription>Website under construction</CardDescription>
                </CardHeader>
                <CardFooter>
                    <h1>By: Francisco Araujo</h1>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Construction;