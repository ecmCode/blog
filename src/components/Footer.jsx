import {ContactForm} from ".";


const Footer = () => { 
    return(
        <footer className="bg-gradient-to-br from-purple-700 to-rose-400 text-rose-200 h-1/3 w-full p-16 gap-6 flex flex-col md:flex-row justify-around items-center shadow-lg">
            <div>
                <h1 className="text-center uppercase">contact me</h1>
                <ContactForm />
            </div>

            <div className="bg-rose-400 w-0 md:w-2 h-0 md:h-96"></div>
            
            <div className="flex flex-col gap-4">
                <h2>Contact Me</h2>
                <p>usermail@mail.com</p>
                <p>+0 123 4567 890</p>
                <p className="text-right italic"> 
                    Some Road, Some City 12345,<br/>
                    Somewhere in the Earth   
                </p>
            </div>
        </footer>
    )
        
}

export default Footer;
