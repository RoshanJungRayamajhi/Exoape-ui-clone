import React, { useState } from 'react'

const Last = () => {

  const [footer, setfooter] = useState(["works","Stdio","News","Contact"])
  return (
    <div className=' w-full h-[78vh] sm:h-screen  bg-black relative'>
      <div className="overlay border-b-2 border-b-zinc-300 mx-20 text-white py-8 h-[60%] flex flex-col items-start justify-between ">
        <div>
          <h1 className=' sm:text-8xl text-5xl font-medium '>Our</h1>
          <h1 className=' text-5xl sm:text-8xl font-medium '>Story</h1>
        </div>
        <p className=' text-lg sm:w-[35%]  sm:text-xl'>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
        <a className=' text-xs sm:text-xl border-b-[1px] border-b-zinc-300 ' href="#">Our story</a>
      </div>
    <div className=' flex  sm:gap-10 capitalize'>
    <div className=' hidden sm:block'>
    <div className='footer   flex flex-col gap-4 text-zinc-400 mx-20 py-10'>
        {["Willem II Singel 8","6041 HS, Roermond","The Netherlands","hello@exoape.com"].map((item,index)=>{
         return  <a key={index} className=' text-sm font-medium inline-block  ' href="#">{item}</a>
        
        })}
        
      </div>
    </div>
    <div className='footer  flex flex-col gap-4 text-zinc-400 mx-20 py-10'>
        {footer.map((item,index)=>{
         return  <a key={index} className=' text-sm font-medium inline-block  ' href="#">{item}</a>
        
        })}
        
      </div>
      <div className='footer  flex flex-col gap-4 text-zinc-400 mx-20 py-10'>
        {["Behance","Twitter","instagram","Dribble"].map((item,index)=>{
         return  <a key={index} className=' text-sm font-medium inline-block  ' href="#">{item}</a>
        
        })}
        
      </div>
    </div>

      

    </div>
  )
}

export default Last