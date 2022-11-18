
import { Link } from "react-router-dom";




const Header = () => {
    
    return(
        <header className="absolute w-full h-auto shadow-xl flex justify-around items-center py-4
            bg-rose-500 text-4xl bg-opacity-20 select-none text-rose-200">
            <h2>Blogger</h2>
            <ul className="flex gap-16 text-lg font-semibold"> 
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
            </ul>
        </header>  
    )

}

export default Header;
