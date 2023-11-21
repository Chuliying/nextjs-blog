'use client'
 
export default function myImageLoader(image) {
  console.log(image.src)
  return `https://chuliying.github.io/nextjs-blog${image.src}}`
}