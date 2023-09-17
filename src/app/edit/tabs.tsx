'use client'
import { CldImage } from 'next-cloudinary';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo({src}:{src:string}) {
  return (
    <Tabs defaultValue="original" className="w-full py-4 px-5">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="original">Original</TabsTrigger>
        <TabsTrigger value="blur">Blur</TabsTrigger>
        <TabsTrigger value="gray">Gray Scale</TabsTrigger>
        <TabsTrigger value="oil">Oil Paint</TabsTrigger>
        <TabsTrigger value="improve">Improve</TabsTrigger>
      </TabsList>
      {/* {original} */}
      <TabsContent value="original">
        <div className="flex justify-center py-4 items-center gap-6">      
            <div>
            <CldImage
         width="300"
         height="300"
         src={src}
         sizes="100vw"
         alt="Description of my image"
       />
       </div>
        <div>
        <CldImage
         width="300"
         height="300"
         src={src}
         sizes="100vw"
         alt="Description of my image"
       />
       </div>
       </div>
      </TabsContent>
      {/* {blur} */}
      <TabsContent value="blur">
        <div className="flex justify-center py-4 items-center gap-6">      
            <div>
            <CldImage
         width="300"
         height="300"
         src={src}
         sizes="100vw"
         alt="Description of my image"
       />
       </div>
        <div>
        <CldImage
         width="300"
         height="300"
         src={src}
         sizes="100vw"
         alt="Description of my image"
         blur={800}
       />
       </div>
       </div>
      </TabsContent>
      {/* {grey scale} */}
      <TabsContent value="gray">
        <div className="flex justify-center py-4 items-center gap-6">      
            <div>
            <CldImage
         width="300"
         height="300"
         src={src}
         sizes="100vw"
         alt="Description of my image"
       />
       </div>
        <div>
        <CldImage
         width="300"
         height="300"
         src={src}
         sizes="100vw"
         alt="Description of my image"
         grayscale={true}
       />
       </div>
       </div>
      </TabsContent>
      {/* {oil paint} */}
      <TabsContent value="oil">
        <div className="flex justify-center py-4 items-center gap-6">      
            <div>
            <CldImage
         width="300"
         height="300"
         src={src}
         sizes="100vw"
         alt="Description of my image"
       />
       </div>
        <div>
        <CldImage
         width="300"
         height="300"
         src={src}
         sizes="100vw"
         alt="Description of my image"
         oilPaint={true,"70"}
       />
       </div>
       </div>
      </TabsContent>
      {/* {Improve} */}
      <TabsContent value="improve">
        <div className="flex justify-center py-4 items-center gap-6">      
            <div>
            <CldImage
         width="300"
         height="300"
         src={src}
         sizes="100vw"
         alt="Description of my image"
       />
       </div>
        <div>
        <CldImage
         width="300"
         height="300"
         src={src}
         sizes="100vw"
         alt="Description of my image"
         improve={true, "50", "indoor"}
       />
       </div>
       </div>
      </TabsContent>
    </Tabs>
  )
}