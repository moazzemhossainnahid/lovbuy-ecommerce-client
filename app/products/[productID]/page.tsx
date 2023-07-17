import React from 'react'
import DetailSection from '@/components/product/detailPage/DetailSection'
import ImageSection from '@/components/product/detailPage/ImageSection'
import ProductDescription from '@/components/product/detailPage/ProductDescription'

const getProduct = async (id: string) => {
  const res = await fetch(
    `https://lovbuy-ecommerce-server.vercel.app/api/v1/products/${id}`
  )
  const data = await res.json()
  return data
}
type Props = {
  params: {
    productID: string
  }
}

const ProductDetail = async ({ params }: Props) => {
  // Get product details by id
  const data = await getProduct(params?.productID)

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
    <div className="container mx-auto max-w-6xl px-8 py-16 md:px-0">
      <div className=" justify-between gap-32 md:flex">
        {/* left side */}
        <div className="md:w-1/2">
          {/* Img section  */}
          <ImageSection images={images} />

          {/* Description section */}
          <ProductDescription />
        </div>

        {/* Right side or detail section */}
        <div className="md:w-1/2">
          <DetailSection
            info={{ name, price, stock, ratings, quantity, shipping, seller }}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
