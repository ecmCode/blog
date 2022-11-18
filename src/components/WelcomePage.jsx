import animate from '../animation/animation.js'

const WelcomePage = () => {
    
    return(
        <div className="bg-gradient-to-tl from-purple-600 to-rose-600 text-rose-200 h-auto w-auto px-16 py-48 gap-6 flex flex-col justify-start items-center">
            <h1 className="text-4xl lg:text-5xl my-5 opacity-0 animate-[fadein_0.5s_ease-in-out_forwards]" id='target'>Welcome To My Blog.</h1>
            <p className=" px-2 lg:px-12 text-right text-lg lg:text-xl opacity-0 animate-[fadein_1s_ease-in-out_0.5s_forwards] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat voluptatibus dolor officia molestiae rem quis magni provident rerum et. Eius distinctio suscipit doloremque, debitis voluptate temporibus expedita facilis provident eligendi.</p>
            <button onClick={(e) => animate(e)}
            className="px-6 py-4 my-4 rounded-xl ring-2 text-purple-600 text-lg bg-rose-100 bg-opacity-40 opacity-0 animate-[fadein_1s_ease-in-out_0.8s_forwards]">
                Continue
            </button>
            
        </div>
    )

}

export default WelcomePage