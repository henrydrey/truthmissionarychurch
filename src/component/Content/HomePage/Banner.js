import React from 'react'

const Banner = () => {
  return (
    <div>
        <section className=' flex mt-2 mb-4 gap-8'>
        <article className=' flex-1  m-2.5 p-2.5 rounded-3xl border-3 border-white bg-cover bg-no-repeat bg-slate-200 h-3/6 text-slate-500 bg-blend-darken py-8 hover:h-2/5 hover:scale-100 banner'>
          <h1 className=' mb-4 p-5 font-bold text-4xl tracking-wide text-red-800 ml-3 mr-3 shadow-2xl'>
            Truth Missionary Baptist Church
          </h1>
          <p className='p-5 text-sky-950 ml-3 mr-96 tracking-wide'>
            Welcome home to Truth Missionary Bible Church! We hope you have a great time while we learn the word of the Lord together and attain salvation together
          </p>
          <p className='p-5 text-sky-950 ml-60 tracking-wider text-xl font-bold pb-10 hover:font-bold hover:text-blue-900'>
            ... but truth and grace. (John 1: 17b)
          </p>
          <div className=' items-center justify-items-center content-center ml-96 pb-10'>
            <button className=' bg-blue-600 text-white px-10 py-2 ml-64 rounded-full hover:bg-blue-800 tracking-wide'>
              I'm New
            </button>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Banner