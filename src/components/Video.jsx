import React from 'react'
import Webcam from 'react-webcam'

const Video = () => {
    return (
        <div className='flex p-10'>
            <div>
                <Webcam
                    imageSmoothing={true}
                    mirrored={true}
                    width={720}
                />
            </div>
            <div className='w-1/2 px-4 flex flex-col'>
                <h3 className='font-extrabold font text-2xl pb-4'>Caption</h3>
                <textarea id="message" rows="12" className="block p-2.5 w-full bg-gray-100 border-2 border-indigo-300 focus:outline-none rounded text-2xl">
                </textarea>

                <div className='absolute bottom-20'>
                    <button className='text-white bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>Copy</button>

                </div>
            </div>
        </div>
    )
}

export default Video