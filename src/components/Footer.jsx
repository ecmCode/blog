import {ContactForm} from ".";


const Footer = () => { 
    return(
        <footer className="bg-gradient-to-br from-purple-700 to-rose-400 text-rose-200 h-1/3 w-full p-12 gap-6 flex flex-col md:flex-row justify-around items-center shadow-lg">
            <div className="w-full md:w-1/3">
                <h1 className="text-center uppercase m-6">contact me</h1>
                <ContactForm />
            </div>

            <div className="bg-rose-500 w-0 md:w-2 h-0 md:h-96"></div>
            
            <div className="flex flex-col gap-4 text-right">
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
        </footer>
    )
        
}

export default Footer;
