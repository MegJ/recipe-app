
import React from "react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "./ui/card";

  import { useNavigate } from "react-router-dom";


interface RecipeCardProps {
    title: string,
    image: string,
    id: number,
}

const RecipeCard = (props: RecipeCardProps) => {

    const navigate = useNavigate();

    const onClick = () => {
        let path = "/recipe/" + props.id;
        navigate(path);
    }

    return (
        <Card onClick={onClick} >
            <CardContent className="p-0">
                <img 
                    className="w-full"
                    src={props.image}
                />
            </CardContent>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
            </CardHeader>
        </Card>
    )
}

export { RecipeCard }