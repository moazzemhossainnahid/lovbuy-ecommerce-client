import React from 'react'
import ProductCard from './product/ProductCard'

const getProducts = async () => {
  const res = await fetch(
    'https://lovbuy-ecommerce-server.vercel.app/api/v1/products',
    {
      headers: {
        Authorization: ``,
      },
    }
  )
  const product = await res.json()
  return product.data.result
}

// Product type
type ProductType = {
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

const Product = async () => {
  const products = await getProducts()
  return (
    <div className="w-full mx-auto p-5">
      <h1 className="text-3xl font-bold">Product Section</h1>
      <div className="grid gap-4 py-16 lg:grid-cols-4">
        {products.map((p: ProductType) => {
          return <ProductCard data={p} />
        })}
      </div>
    </div>
  )
}

export default Product
