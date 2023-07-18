import React from 'react';

const ReadyToTalk = () => {
    return (
        <div className='w-full mx-auto p-5 h-full pt-5 md:pt-10 py-10'>

                <h3 className="text-3xl md:text-4xl text-gray-700 text-center font-bold pb-10">Ready To Talk ?</h3>


                <div className="w-full group flex items-center justify-center pb-7">
                <span className="text-gray-700 group transition-all">Letʼs Start the Convo </span>
                <span className="text-gray-700  pl-3 text-xl group-hover:translate-x-5 duration-200">&rarr;</span>
                </div>

                <div className="bg-gradient-to-r from-[#3b00c4] text-center to-[#c40083] p-10 py-16 md:w-3/4 mx-auto rounded">

                        <h3 className="text-white text-3xl md:text-4xl font-semibold">Let's Keep In Touch</h3>


                        <p className="text-white font-thin py-3">Join with Us for get instant update about offers and more</p>


                        <div className="py-7 space-y-2 md:space-y-0">
                            <input type="text" placeholder="Enter Your Mail" className="input rounded-none w-full max-w-xs" />
                            <input className='bg-black hover:bg-[#212121] text-white px-5 py-3 cursor-pointer' type="submit" value="Subscribe" />
                        </div>

                </div>

        </div>
    );
};

export default ReadyToTalk;