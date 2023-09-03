import React from 'react'
import ladies from "../../../../../assets/imgs/Biblestudy.jpg"
import Footer from '../../../HomePage/Footer'

const Ladies = () => {
  return (
    <>
      <div className="border-2 border-cyan-400 rounded-2xl my-5">
      <div className=' px-5 mx-5'>
        <h1 className=' uppercase tracking-wide text-lg font-semibold text-slate-600 py-5'>Ministries</h1>
        <h2 className='py-5 text-center text-red-600 text-5xl tracking-widest font-bold uppercase'>Ladies Fellowship</h2>
      </div>
      
      <div className=' px-5 mx-5 py-10'>
        <p className=' mx-5 w-fit'>
          The Ladies Fellowship is a ministry in the church that brings together people from all walks of life and integrates them into  the body of Christ- the church.
          Lorem ipsum dolor sit amet consectetur adipiscing, elit ultrices sapien montes senectus dis, congue feugiat imperdiet donec nullam. Aenean mattis porta mollis ligula etiam quam risus sodales cubilia, sed dis nibh faucibus velit lacinia semper.
          Lorem ipsum dolor sit amet consectetur adipiscing, elit ultrices sapien montes senectus dis, congue feugiat imperdiet donec nullam. Aenean mattis porta mollis ligula etiam quam risus sodales cubilia, sed dis nibh faucibus velit lacinia semper.
          Lorem ipsum dolor sit amet consectetur adipiscing, elit ultrices sapien montes senectus dis, congue feugiat imperdiet donec nullam. Aenean mattis porta mollis ligula etiam quam risus sodales cubilia, sed dis nibh faucibus velit lacinia semper.
        </p>
      </div>
      <div className=' px-5 py-10 items-center content-center text-center mx-28 ml-40'>
        <img src={ladies} alt='ladies' className=" w-auto h-1/6"/>
      </div>
      <div className=' px-5 mx-5 py-10'>
        <p className=' mx-5 w-fit'>
          Lorem ipsum dolor sit amet consectetur adipiscing, elit ultrices sapien montes senectus dis, congue feugiat imperdiet donec nullam. Aenean mattis porta mollis ligula etiam quam risus sodales cubilia, sed dis nibh faucibus velit lacinia semper.
          Lorem ipsum dolor sit amet consectetur adipiscing, elit ultrices sapien montes senectus dis, congue feugiat imperdiet donec nullam. Aenean mattis porta mollis ligula etiam quam risus sodales cubilia, sed dis nibh faucibus velit lacinia semper.
          Lorem ipsum dolor sit amet consectetur adipiscing, elit ultrices sapien montes senectus dis, congue feugiat imperdiet donec nullam. Aenean mattis porta mollis ligula etiam quam risus sodales cubilia, sed dis nibh faucibus velit lacinia semper.
          Lorem ipsum dolor sit amet consectetur adipiscing, elit ultrices sapien montes senectus dis, congue feugiat imperdiet donec nullam. Aenean mattis porta mollis ligula etiam quam risus sodales cubilia, sed dis nibh faucibus velit lacinia semper.
        </p>
      </div>
    </div>
    <Footer /> 
    </>
    
    
  )
}

export default Ladies