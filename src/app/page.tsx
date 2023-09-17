'use client'
import {useState,} from 'react'
import { CldUploadButton, CldImage } from 'next-cloudinary';
interface UploadImage {
  event : "success";
  info : {public_id : string};
}


export default function Home() {
  const [imageId, setImageId] = useState("cld-sample-4")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton uploadPreset="clbwajdc" onUpload={(result) => { 
      let res = result as UploadImage
      setImageId(res.info.public_id) 
      }}/>
      <CldImage
        width="760"
        height="400"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  )
}
