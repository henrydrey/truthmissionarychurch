import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { links } from './DropInfo'

const NavLinks = () => {
    const [heading, setHeading] = useState("")
    const [subHeading, setSubHeading] = useState("")
  return (
    <>
        {
            links.map(link => (
                <div>
                    <div className='px-10 text-left group'>
                        <h1 className='p-2 flex justify-between items-center md:pr-0 pr-5 uppercase md:cursor-pointer ' onClick={() => {heading !== link.name ? setHeading(link.name) : setHeading(""); setSubHeading("")}}>
                            {link.name}
                            <span className='text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2'>
                                {/* <ion-icon name={`${heading === link.name ? "chevron-up" : "chevron-down"}`}></ion-icon> */}
                            </span>
                        </h1>
                        {link.submenu && (
                        <div>
                            <div className=' absolute hidden group-hover:md:block hover:md:block transition delay-500'>
                                <div className=' py-3'>
                                    <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'></div>
                                </div>
                                <div className='bg-white p-5 w-full rounded-lg py-10 px-10'>
                                {/* grid grid-cols-3 gap-10 */}
                                    {
                                        link.sublink.map((mysublinks) =>(
                                            <div className='p-5'>
                                                <h1 className=' text-3xl font-bold flex uppercase text-sky-700 mb-7 tracking-widest'>{mysublinks.Head}</h1>
                                                    <div>
                                                        <div className='mb-5 text-slate-600 text-sm'>
                                                            {mysublinks.Description.map(desc => (
                                                                <p>
                                                                    {desc.description}
                                                                </p>
                                                            ))}
                                                        </div>
                                                        <div>
                                                            {mysublinks.Description.map(heading => (
                                                                <h1 className='uppercase py-0.5 text-indigo-900 font-semibold tracking-wide text-xl'>
                                                                    {heading.historyHead}
                                                                </h1>
                                                            ))}
                                                            <div className='mb-5 text-slate-600 text-sm'>{mysublinks.Description.map(hist => (
                                                                <p>
                                                                    {hist.history}
                                                                </p>
                                                            ))}</div>
                                                        </div>
                                                        <div>
                                                            {mysublinks.Description.map(meetHead => (
                                                                <h1 className='uppercase py-0.5 text-indigo-900 font-semibold tracking-wide text-xl'>{meetHead.meetHead}</h1>
                                                            ))}
                                                            <div className='mb-10 text-slate-600 text-sm'>{mysublinks.Description.map(meet => (
                                                                <p>
                                                                    {meet.meetInfo}
                                                                </p>
                                                            ))}</div>
                                                        </div>
                                                        {mysublinks.sublink.map(slink => (
                                                            <li className=' my-2.5 bg-sky-800 w-60 p-2 font-medium text-lg text-white rounded-2xl hover:bg-sky-950 hover:cursor-pointer content-center items-center'>
                                                                <Link to={slink.link} className='hover:text-white pl-5'>
                                                                    {slink.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                        
                                                    </div>
                                                    
                                                {/* ))} */}
                                                
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                    {/*Mobile View*/}
                    {/* <div className={`
                        ${heading === link.name ? 'md:hidden' : 'hidden'}
                    `}>
                        {
                            link.sublinks.map((slinks) => (
                                <div>
                                    <div>
                                        <h1 
                                            onClick = {() => 
                                                subHeading !== slinks.Head 
                                                ? setSubHeading(slinks.Head) 
                                                : setSubHeading("")
                                            } 
                                            className='py-4 pl-7 font-semibold md:pr-0 pr-5'>{slinks.Head}</h1>
                                        <div className={`${
                                            subHeadng === slinks.Head ? "md:hidden" : "hidden"
                                        }`}>
                                            {slinks.sublink.map(slink => (
                                                <li>
                                                    <Link to={slink.link}>{slink.name}</Link>
                                                </li>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div> */}

                </div>
            ))
        }
    </>
  )
}

export default NavLinks