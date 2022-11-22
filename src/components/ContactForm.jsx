import { useState } from "react"

const ContactForm = () => {
    
    const [submit,setSubmit] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        setSubmit(true)
    }
    
    return( 
        <div className="bg-rose-200 bg-opacity-80 text-center text-orange-900 shadow-lg p-4">
        
        {submit ?

            (<div className="p-6 animate-fadein">
                <p>Thanks for your feedback! We will get you back ASAP.</p>
            </div>)
        
        :

            <form method="POST" className="flex flex-col items-start" onSubmit={e => handleSubmit(e)}>
                <label htmlFor="name" className="font-bold">Name</label>
                <input type="text" name="name" id="name" className="p-2 outline-none w-full drop-shadow-md bg-inherit border-rose-400 border-0 border-b-2 focus:border-cyan-500 mb-3" required/>
                
                <label htmlFor="email" className="font-bold">Email</label>
                <input type="email" name="email" id="email" className="p-2 outline-none w-full drop-shadow-md bg-inherit border-rose-400 border-0 border-b-2 focus:border-cyan-500 mb-3" required/>
                
                <label htmlFor="feedback" className="py-4 font-bold">Feedback</label>
                <textarea name="feedback" id="feedback" cols="10" rows="10" required className=" bg-inherit rounded-lg border-2 border-rose-400 resize-none p-2 outline-none overflow-x-auto h-32 w-full shadow-inner focus:border-cyan-500"></textarea>
                
                <button type="submit" className="my-4 rounded-lg shadow-md bg-rose-400 active:bg-cyan-500 py-2 text-rose-100 text-2xl w-full">Submit</button>
            </form>}

        </div>    
    )

}

export default ContactForm;
