
const Title = (props) => {
    
    return (
        <div className="text-center py-10 bg-gradient-to-br from-rose-200 to-purple-100 drop-shadow-xl text-zinc-900 animate-[fadein_1.5s_ease-in-out]">
            <h1>{props.name}</h1>
            <hr className="w-full md:w-1/3 h-2 my-6 bg-rose-400 m-auto drop-shadow-md"/>
      </div>
    )

}

export default Title;
