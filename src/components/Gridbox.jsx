

const Gridbox = (props) => {
    
    return(
        <div className={`w-full grid ${props.grid} gap-10 justify-center items-center mx-auto px-16 py-20 object-fit bg-cover`}
        style={{backgroundImage: `url(${props.url})`}}>
            {props.children}
        </div>
    )

}

export default Gridbox