import ContactForm from "./ContactForm";

const Contact = () => {
    
    return (
        <div className="w-full h-auto text-center py-24 px-16 bg-gradient-to-tl from-purple-600 to-rose-600  text-rose-200">
            <h1 className="text-center m-12 animate-fadein">Contact Me</h1>
            <div className="animate-fadein py-10 md:py-20 px-6 m-0 md:m-6 bg-rose-100 bg-opacity-10 backdrop-blur-lg shadow-sm rounded-lg flex flex-col md:flex-row items-center justify-around">
                <div className="w-full md:w-1/3">
                    <ContactForm/>  
                </div>
                <div className="bg-rose-500 w-0 md:w-2 h-0 md:h-96"></div>
                <div className="flex flex-col gap-4 my-10 text-right">
                    <div className="flex gap-6 text-4xl items-center justify-center my-6">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-github"></i>
                    </div>
                    <p><i className="fa-solid fa-envelope text-2xl mx-2" /> usermail@mail.com</p>
                    <p><i className="fa-solid fa-phone text-2xl mx-2" /> +0 123 4567 890</p>
                    <p className="text-right italic"> 
                        Some Road, <br/>
                        Some City 12345,<br/>
                        Somewhere,<br/>
                        Earth   
                    </p>
                </div>
            </div>
        </div>
    )

}

export default Contact;
