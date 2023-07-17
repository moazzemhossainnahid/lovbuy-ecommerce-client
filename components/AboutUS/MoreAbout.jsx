import React from 'react';

const MoreAbout = () => {
    return (
        <div className='w-full'>

            <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div class="flex flex-col lg:flex-row justify-between gap-8">
                    <div class="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">About Us</h1>
                        <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                    </div>
                    <div class="w-full lg:w-8/12">
                        <img class="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                    </div>
                </div>

                <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                    <div class="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Meet Our Developers</h1>
                        <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                    </div>
                    <div class="w-full lg:w-8/12 lg:pt-8">
                        <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                            <div class="p-4 pb-6 flex justify-center flex-col items-center">
                                <img class="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Image" />
                                <img class="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Image" />
                                <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Alexa</p>
                            </div>
                            <div class="p-4 pb-6 flex justify-center flex-col items-center">
                                <img class="md:block hidden" src="https://i.ibb.co/qdd4R9T/nahid.jpg" alt="Nahid featured Image" />
                                <img class="md:hidden block" src="https://i.ibb.co/qdd4R9T/nahid.jpg" alt="Nahid featured Image" />
                                <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">MD. NAHID</p>
                            </div>
                            <div class="p-4 pb-6 flex justify-center flex-col items-center">
                                <img class="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Image" />
                                <img class="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Image" />
                                <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Liam</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MoreAbout;