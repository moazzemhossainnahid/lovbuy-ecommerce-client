import React from 'react'
import DetailSection from '@/components/product/detailPage/DetailSection'
import ImageSection from '@/components/product/detailPage/ImageSection'
import ProductDescription from '@/components/product/detailPage/ProductDescription'
import { useSession } from 'next-auth/react'

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
    sale,
    ratings,
    description,
    ratingsCount,
    images,
    sku,
    shipping,
    quantity,
  } = data


  // const {data:session, status} = useSession({
  //   required:true
  // })
  
  // if(status === "loading"){
  //   return <></>
  // }
  return (
    <div className="mx-auto px-8 py-16 md:px-0">
      <div className=" justify-between gap-32 md:flex">
        {/* left side */}
        <div className="md:w-1/2">
          {/* Img section  */}
          <ImageSection images={images} />

          {/* Description section */}
          <ProductDescription description={description} />
        </div>

        {/* Right side or detail section */}
        <div className="md:w-1/2">
          <DetailSection
            info={{ _id, name, price,sale, stock, sku, images, ratings, shipping,description, seller, quantity, ratingsCount, category }}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
