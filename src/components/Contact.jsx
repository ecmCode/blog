import ContactForm from "./ContactForm";

const Contact = () => {
    
    return (
        <div className="w-full h-screen text-center py-20 bg-gradient-to-tl from-purple-600 to-rose-600 flex flex-col justify-center items-center">
            <h1>Contact</h1>
            <div className=" w-1/2 ">
                <ContactForm/>

            </div>
        </div>
    )

}

export default Contact;
