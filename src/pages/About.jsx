import React from 'react'

const About = () => {

  return (
    <>
      <div className='bg-white my-6 p-8 flex w-full flex-col md:flex-row md:justify-between'>
        <div className='max-w-max font-extrabold text-5xl mt-5'>
          
          <h1 className="m-5 ml-1 mb-25  text-4xl text-black-100 md:text-6xl">
            Hi, I&apos;m <br className="block md:hidden" />
            <span className="relative">
              <span className="text-indigo-600 h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
                Assistant <span className="text-3xl md:text-5xl">👋</span>
              </span>
              <span
                className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-white w-full animate-type will-change`}"
              ></span>
            </span>
          </h1>
          
          <p className='mt-8 font-normal xl:text-xl text-sm text-gray-400'>Create and collaborate on online documents in real-time and from any device.</p>
        </div>
        <div>
          {<img src="lp.png" className=' h-96 transform -scale-x-100 mr-16 max-w-xs mt-4 md:mt-0 md:max-w-2xl' />}
        </div>
      </div>
    </>
  )
}

export default About