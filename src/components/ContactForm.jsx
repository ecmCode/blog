import { useState } from "react"

const ContactForm = () => {
    
    const [submit,setSubmit] = useState(false)
    const handleSubmit = () => {
        setSubmit(true)
    }
    
    return( 
        <div className="bg-rose-100 text-center text-orange-900 shadow-lg">
        
        {submit ?

            (<div >
                <p>Thank you for your feed back! We will get you back ASAP.</p>
            </div>)
        
        :

            <form action="POST" className="flex flex-col items-center ">
                <label htmlFor="name" className="py-2">Name</label>
                <input type="text" name="name" id="name" className="p-2 outline-none w-full shadow-md" required/>
                
                <label htmlFor="email" className="py-2">Email</label>
                <input type="email" name="email" id="email" className="p-2 outline-none w-full shadow-md" required/>
                
                <label htmlFor="feedback" className="py-2">Feedback</label>
                <textarea name="feedback" id="feedback" cols="10" rows="10" required className=" resize-none p-2 m-2 outline-none overflow-x-auto h-32 w-full shadow-md"></textarea>
                
                <button type="submit" onClick={() => handleSubmit()} className="bg-rose-400 py-2 text-rose-100 text-xl w-full">Submit</button>
            </form>}

        </div>    
    )

}

export default ContactForm;
