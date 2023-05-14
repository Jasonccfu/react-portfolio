import React from 'react';
import Typed from 'react-typed';

const Profile = () => {
    return(
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH FULL STACK</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>JASON CHEN</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Passionate being for</p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['WED DEV','FULL STACK','SOFTWARE DEV']} typeSpeed={120} backSpeed={140} loop />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
        </div>
    );
}
export default Profile;