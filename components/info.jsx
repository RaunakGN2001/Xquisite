'use client';

import Currency from "@/components/ui/currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";

const Info = ({ data }) => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-gray-900'>{data.name}</h1>
            <div className='mt-3 flex items-center justify-between'>
                <p className='text-2xl text-gray-900'>
                    <Currency value={data.price} />
                </p>
            </div>
            <hr className='my-4' />
            <div className='flex flex-col gap-y-6'>
                <div className='flex items-center gap-x-2'>
                    <h3 className='font-semibold text-black'>Size:</h3>
                    <div>
                        {data?.size?.name}
                    </div>
                </div>

                <div className='flex items-center gap-x-2'>
                    <h3 className='font-semibold text-black'>Color:</h3>
                    <div className='h-6 w-6 border-2 border-gray-600 rounded-full ' style={{ backgroundColor: `${data?.color?.value}` }} />
                </div>
            </div>
            <div className='mt-10 flex items-center gap-x-3'>
                <Button className='flex flex-row items-center gap-x-2'>
                    Add to Cart
                    <ShoppingCart className='' />
                </Button>
            </div>
        </div>
    );
}

export default Info;