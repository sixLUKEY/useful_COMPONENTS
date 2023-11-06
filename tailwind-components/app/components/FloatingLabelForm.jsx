import React from 'react'

function FloatingLabelForm() {
  return (
    <div>
        <h3 className='text-3xl'>
            Floating Label Contact Form
        </h3>

        <form action="" className=' border border-primary dark:border-primary-dark px-5 py-10 rounded-md max-w-lg flex flex-col gap-8 my-5'>
        
        <div className='relative w-full'>
        <input type="text" id='name' placeholder='name' className='peer placeholder-transparent p-2 w-full dark:bg-slate-800' />
        <label htmlFor="name" className=' transition absolute left-0 top-2 text-sm translate-x-1 -translate-y-8 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-2 peer-placeholder-shown:text-base '>Your Name</label>
        </div>

        <div className='relative w-full'>
        <input type="email" id='email' placeholder='email' className='peer placeholder-transparent p-2 w-full dark:bg-slate-800' />
        <label htmlFor="email" className=' transition absolute left-0 top-2 text-sm translate-x-1 -translate-y-8 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-2 peer-placeholder-shown:text-base '>Your Email</label>
        </div>

        <div className='relative w-full'>
        <textarea name="message" id="message" cols="30" rows="10" placeholder='leave a message' className='peer placeholder-transparent p-2 w-full dark:bg-slate-800'></textarea>
        <label htmlFor="message" className=' transition absolute left-0 top-2 text-sm translate-x-1 -translate-y-8 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-2 peer-placeholder-shown:text-base '>Leave a message</label>
        </div>

<button type='submit' className='text-white bg-primary hover:bg-blue-500 dark:hover:bg-orange-500 dark:bg-primary-dark transition w-fit mx-auto rounded-sm px-5 py-2'>
    Submit
</button>
        </form>
    </div>
  )
}

export default FloatingLabelForm