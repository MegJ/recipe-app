// @ts-expect-error 
import { useParams } from 'react-router-dom';

import { 
    useQuery,
    // @ts-expect-error 
} from "@tanstack/react-query";
import { Separator } from '@/components/ui/separator';

const RecipePage = () => {

    const params = useParams();
    const id = params.id ?? 715538;

    const URLBase = "https://api.spoonacular.com/recipes/" + id + "/information?includeNutrition=false";
    const url = new URL(URLBase);
    url.searchParams.append('apiKey', 'f9e1c0abc2584dbda3331f85f26b8977');

    const {isPending, error, data } = useQuery({
        queryKey: [id],
        queryFn: () => 
            fetch(url).then((res) => res.json()),
    })


    return (
        <>
            {isPending && <div>The chefs are working on your recipe!</div>}
            {error && <div>Uh oh... Looks Like something went wrong</div>}
            {data &&
                <div className='px-32 '>
                    <div className="grid grid-cols-[400px_auto] gap-3">
                        <div className="flex ">
                            <h2 className="text-3xl m-auto font-bold tracking-tight">{data.title}</h2>
                        </div>
                        <div className='p-8'>
                            <img 
                                className="w-full"
                                src={data.image}
                            />
                        </div>
                    </div>
                    <Separator /> 
                    <div className="grid grid-cols-[400px_auto] gap-3">
                        <div className="flex-1 space-y-4 p-8 pt-6">
                            <h2 className="text-2xl font-bold tracking-tight">Ingredients</h2>

                            {data.extendedIngredients.map((ingredient: any) => {
                                return (
                                    <div>
                                        {ingredient.original}
                                    </div>
                                )
                            })}
                        </div>
                        <div className='py-12'>
                        <h2 className="text-2xl font-bold tracking-tight">Preperation</h2>
                            {data.instructions}
                        </div>
                    </div>
                </div>
    }
    </>
    )}


export default RecipePage;