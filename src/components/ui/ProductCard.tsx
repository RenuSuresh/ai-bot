"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./Button";

interface ProductCardProps {
	title: string;
	price: number;
	description: string;
	imageUrl: string;
	onAddToCart?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
	title,
	price,
	description,
	imageUrl,
	onAddToCart,
}) => {
	return (
		<div className='w-full max-w-[280px] md:max-w-sm rounded-lg border border-gray-200 bg-white shadow-md'>
			<div className='relative h-40 md:h-48 w-full'>
				<Image
					src={imageUrl}
					alt={title}
					fill
					className='rounded-t-lg object-cover'
				/>
			</div>
			<div className='p-3 md:p-5'>
				<h5 className='mb-2 text-lg md:text-xl font-bold tracking-tight text-gray-900 line-clamp-1'>
					{title}
				</h5>
				<p className='mb-3 text-xs md:text-sm text-gray-700 line-clamp-2'>
					{description}
				</p>
				<div className='flex items-center justify-between'>
					<span className='text-lg md:text-xl font-bold text-gray-900'>
						₹{price}
					</span>
					<Button variant='primary' size='sm' onClick={onAddToCart}>
						Add to Cart
					</Button>
				</div>
			</div>
		</div>
	);
};
