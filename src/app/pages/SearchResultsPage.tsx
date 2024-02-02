import React from "react";
import { useParams } from 'react-router-dom';
import { 
    useQuery,
    // @ts-expect-error 
} from "@tanstack/react-query";

import { RecipeCard } from "../../components/recipe-card";

const getUrl = (queryString: string) => {

    const URLBase = 'https://api.spoonacular.com/recipes/complexSearch';
    const url = new URL(URLBase);
    url.searchParams.append('query', queryString);
    url.searchParams.append('number', '12');
    url.searchParams.append('apiKey', 'f9e1c0abc2584dbda3331f85f26b8977');

    return url;
}

const SearchResultsPage = () => {
    
    const queryString = useParams().query;

    const url = getUrl(queryString);

    const {isPending, error, data } = useQuery({
        queryKey: ['recipeData', queryString],
        queryFn: () => 
            fetch(url.toString()).then((res) => res.json().then((json) => json.results)),
    })

    return (
        <div className="bg-neutral-200 min-h-screen py-10 pr-10 pl-10" >
            {isPending && <div>Stay tuned... We're cooking up your recipes... </div>}
            {error && <div>Uh oh... Looks like something went wrong </div>}
            {data && 
                <div className="grid grid-cols-4 gap-4">
                    {data.map((recipe: any) => <RecipeCard key={recipe.key} id={recipe.id} title={recipe.title} image={recipe.image}/>)}
                </div>
            }
        </div>
    )
}

export default SearchResultsPage;