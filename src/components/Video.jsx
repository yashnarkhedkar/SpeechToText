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
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias deserunt ex vitae tempore illum. Rerum molestiae dolore ipsa quasi architecto itaque exercitationem dolorum nihil eveniet. Illo voluptatum, eos totam cumque quibusdam eius fuga atque fugit, officiis quidem quia aperiam deserunt quam exercitationem voluptatibus cupiditate nulla suscipit inventore ab tenetur enim! Quod illo architecto amet quisquam maxime commodi odio tenetur veniam cumque possimus, illum sequi beatae quidem, alias maiores? Commodi maxime nesciunt assumenda quae ab voluptate doloribus iste at aliquam earum. Dignissimos aspernatur tenetur delectus distinctio, accusamus perferendis nobis? Illum quas
                </p>
                <div className='absolute bottom-20'>
                    <button className='text-white bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>Copy</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Video