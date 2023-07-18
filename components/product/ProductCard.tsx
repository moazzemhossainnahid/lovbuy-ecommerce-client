import Image from 'next/image'
import React from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'
import ProductDetailsButton from './ProductDetailsButton'
import Ratings from './detailPage/Ratings'
import ProductCardAddToCartBTN from './ProductCardAddToCartBTN'

interface DataProps {
  data: {
    _id: string
    category: string
    name: string
    seller: string
    price: number
    stock: number
    ratings: number
    ratingsCount: number
    images: [string]
    shipping: number
    quantity: number
  }
}

const ProductCard = ({ data }: DataProps) => {
  // Product Data Destructured
  const {
    _id,
    category,
    name,
    seller,
    price,
    stock,
    ratings,
    ratingsCount,
    images,
    shipping,
    quantity,
  } = data
  return (
    <div className="w-full mx-auto relative pb-16 rounded-lg border border-gray-200 bg-white p-6  shadow dark:border-gray-700 dark:bg-gray-800">
      <ProductDetailsButton id={_id}>
        <div className="mb-2  grid justify-center">
          <Image
            className=" object-cover"
            src={images[0]}
            alt="product img"
            width={550}
            height={50}
          />
        </div>

        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology
        </p>

        <h2>
          <span className="text-xl font-semibold text-orange-500">
            $ {price.toFixed(2)}
          </span>{' '}
        </h2>
      </ProductDetailsButton>
      <div className="mt-4 absolute bottom-3 flex items-center justify-between text-2xl">
        <ProductDetailsButton id={_id}>
          <Ratings ratings={ratings} />
        </ProductDetailsButton>
        {/* Add to cart */}
        <ProductCardAddToCartBTN data={{ _id, name, images, price }} />
      </div>
    </div>
  )
}

export default ProductCard
