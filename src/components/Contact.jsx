import ContactForm from "./ContactForm";

const Contact = () => {
    
    return (
        <div className="w-full h-screen text-center py-20 bg-gradient-to-tl from-purple-600 to-rose-600 flex flex-col justify-center items-center text-rose-200">
            <h1 className="text-center uppercase m-6 animate-fadein">contact me</h1>
            <div className="animate-fadein w-1/2 ">
                <ContactForm/>

            </div>
        </div>
    )

}

export default Contact;
