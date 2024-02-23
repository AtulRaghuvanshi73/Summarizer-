import React from 'react'

import {logo} from '../assets/assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full m-10 pt-2'>
            <img src= {logo} alt="hero_img"
            className='w-28 object-contain'/>

            <button 
                type="button"
                onClick={() => window.open('https://github.com/AtulRaghuvanshi73/Summarizer-')}
                className='black_btn'
            >
                Github
            </button>
        </nav>

        <h1 className='head_text'>
            Sumarrize Any Article with <br className='max-md:hidden'/>
            <span className='blue_gradient'>Sumarrizer!</span>
        </h1>
        <h2 className='desc'>
            Simply big lengthy articles with Summarizer, 
            an AI powered tool that can summarize any article into a few sentences.
        </h2>
    </header>
  )
}

export default Hero