'use client'
import { useRouter } from 'next/navigation'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  id: string | number
}

const ProductDetailsButton = ({ children, id }: Props) => {
  const { push } = useRouter()

  return (
    <div className=' cursor-pointer hover:-translate-y-1 duration-300' onClick={() => push(`/product/${id}`)}>
      {children}
    </div>
  )
}

export default ProductDetailsButton
