'use client'
import { CldImage } from 'next-cloudinary';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { AddTags } from './action';
import {useState} from 'react'

const View = ({src, tag}:{src:string, tag:string[]}) => {
  const [fav, setFav] = useState(tag.includes("favourite"))
  return (
    <div className='relative'>
    <CldImage
    className='rounded-sm'
    width="760"
    height="400"
    src={src}
    sizes="100vw"
    alt="Description of my image"
  />

  <div className='absolute top-1 right-1' 
    onClick={()=>{
    setFav(!fav);
    AddTags(src ,fav);
  }}>
    {
      fav ? <AiFillHeart className="w-6 h-6 cursor-pointer text-red-500"/> : <AiOutlineHeart className="w-6 h-6 cursor-pointer text-white hover:text-red-500 duration-300"/>
    }
    
  </div>
  </div> 
  )
}

export default View
