import React from 'react';
import Animation2 from '../Others/Animation/Animation2';
 
const ContactMap = () => {
    return (
        <div className=''>
            <div style={{ backgroundImage: "url(https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/repeat.png)" }} className=' bg-cover bg-no-repeat text-center pt-10 pb-40 z-0'>
                <h5 className=' text-lg uppercase font-bold text-[#015ABD]'>MAPS & DIRECTIONS</h5>

                {/* <div className='w-[50px] h-[2px] bg-[#015ABD] relative my-4 mx-auto'>
                    <div className='radiant bg-[#FFFFFF]'></div>
                </div> */}
                <Animation2/>

                <h2 className=' text-4xl font-semibold my-4'>Find Our Location In Town</h2>
                <p className=' lg:w-[420px] mx-auto'>Search for our exact location and office address through this exclusive map listing provided below.</p>
            </div>
             
            <div className='z-40 mt-[-100px] overflow-hidden p-5'>
                <iframe title='map' className='w-full lg:w-[95vw] h-[400px] mx-auto rounded-md' id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3150461.178380638!2d-105.78018600000001!3d39.545575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874014749b1856b7%3A0xc75483314990a7ff!2sColorado!5e0!3m2!1sen!2sus!4v1689575230315!5m2!1sen!2sus"></iframe>
            </div>
        </div>
    );
};

export default ContactMap;