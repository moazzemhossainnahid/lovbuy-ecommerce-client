'use client'
import React, { useState } from 'react'
import useProducts from './Hooks/useProducts'
import Link from 'next/link'
import CartTotalBTN from './shared/CartTotalBTN'

const Header = () => {
  const { products }: any = useProducts()
  const [search, setSearch] = useState([])

  const Products = products?.data?.result

  /* ----------------------------------------------------------------*/
  /*                     Filter By Name Search                       */
  /* ----------------------------------------------------------------*/
  const handleSearchResult = (e: any) => {
    const searchText = e.target.value
    if (e.target.value.length > 0) {
      const result = Products?.filter(
        (product: any) =>
          product?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
          product?.category?.toLowerCase().includes(searchText.toLowerCase()) ||
          product?.seller?.toLowerCase().includes(searchText.toLowerCase())
      )
      setSearch(result)
    } else {
      setSearch([])
    }
  }

  return (
    <header className="sticky top-0 z-50 h-20 w-full bg-gray-300 shadow">
      <nav className="sticky top-0 w-full border-gray-200 bg-white dark:bg-gray-900">
        <div className="mx-auto flex w-full flex-wrap items-center justify-evenly p-4">
          <Link href="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dsigyjfjq/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1689492016/lovbuy_ejfjyb.jpg?_s=public-apps"
              className="mr-3 h-12"
              alt="Flowbite Logo"
            />
          </Link>
          <div className="form-control flex flex-col gap-1">
            {/* <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button> */}
            <div className="relative hidden md:block">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                onChange={handleSearchResult}
                type="text"
                id="search-navbar"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Search..."
              />
            </div>

            <div className="flex flex-col space-y-2">
              <div className="hidden md:block">
                {/* suggest part of div */}
                {search
                  ? search?.length !== 0 && (
                      <div
                        id="suggested_item"
                        className="bg-blur absolute z-10 w-3/5 rounded-lg bg-gray-100 p-4 lg:w-1/4">
                        {search
                          ?.slice(0, 10)
                          ?.map(({ name, _id, images, index }) => (
                            <a href={`/products/${_id}`}>
                              <div className="border-b-2 " key={index}>
                                <div className="divide-y divide-dashed py-2 pt-3 hover:cursor-pointer hover:text-green-400">
                                  <div className="flex items-center gap-3">
                                    <img
                                      src={images[0]}
                                      alt=""
                                      className="h-7 w-7 rounded-full"
                                    />
                                    <p className="text-sm">{name}</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                          ))}
                      </div>
                    )
                  : ''}
              </div>
            </div>

            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="navbar-search"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-search">
            <div className="flex flex-col gap-1">
              <div className="relative mt-3 md:hidden">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-4 w-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  onChange={handleSearchResult}
                  type="text"
                  id="search-navbar"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Search..."
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="block md:hidden">
                  {/* suggest part of div */}
                  {search
                    ? search?.length !== 0 && (
                        <div
                          id="suggested_item"
                          className="bg-blur absolute z-10 w-3/5 rounded-lg bg-gray-100 p-4 lg:w-1/4">
                          {search
                            ?.slice(0, 10)
                            ?.map(({ name, _id, images, index }) => (
                              <a href={`/products/${_id}`}>
                                <div className="border-b-2 " key={index}>
                                  <div className="divide-y divide-dashed py-2 pt-3 hover:cursor-pointer hover:text-green-400">
                                    <div className="flex items-center gap-3">
                                      <img
                                        src={images[0]}
                                        alt=""
                                        className="h-7 w-7 rounded-full"
                                      />
                                      <p className="text-sm">{name}</p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            ))}
                        </div>
                      )
                    : ''}
                </div>
              </div>
            </div>
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
              <li>
                <Link
                  href="/"
                  className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
                  aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500">
                  About US
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500">
                  Contact US
                </Link>
              </li>
            </ul>
            {/* Cart Total Button */}
            <CartTotalBTN />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
