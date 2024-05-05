import React from 'react'

export default async function page() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className='flex min-h-[80vh] flex-col items-center justify-between p-24'>
      <h1 className='text-4xl'>Profile Page</h1>
    </div>
  )
}
