const NotFound = () => {
    
    return(
    
        <div className="bg-gradient-to-br from-purple-700 to-teal-600 backdrop-blur-2xl w-full h-screen flex justify-center item-center ">
            <div className="flex flex-col gap-6 p-10 w-2/3 justify-center items-center text-violet-300"> 
                <h1 className="text-8xl drop-shadow-2xl animate-pulse">404</h1>
                <h1>Not found.</h1>
                <p className="text-right">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore harum odit rerum qui ab, perferendis voluptatem laborum, animi quidem sit hic dolorem consequuntur? Earum eius molestias saepe laborum qui dignissimos.</p>
                <a href="/" className=" bg-violet-400 bg-opacity-50 rounded-lg ring-2 my-6 py-4 px-12 text-xl">Home</a>
            </div>
        </div>
    )
}

export default NotFound