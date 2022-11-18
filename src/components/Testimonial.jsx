import anom from "/src/assets/anom.jpg";


const Testimonial = (props) => {
    
    const reviewStars = (num) =>{

        let stars = [];

        for(let i= 0; i < num; i++) {
          stars.push(<i className="fa-solid fa-star text-2xl duration-100 hover:text-[40px]"></i>);
        }
        for(let i= 0; i < (10-num); i++) {
            stars.push(<i className="fa-regular fa-star text-2xl duration-100 hover:text-[40px]"></i>);
          }

        return (
          <div className="flex flex-wrap gap-2 text-amber-400 justify-center my-6 h-10">{stars}</div>
        );
      };

    return( props.children &&
        <div className="w-auto shadow-xl px-6 py-12 rounded-lg bg-cyan-100 ring-2 ring-cyan-400 text-cyan-900 backdrop-blur-sm opacity-0 animate-[fadein_1s_ease-in-out_1s_forwards]
        bg-opacity-80">
            <div className={`rounded-full w-32 h-32 shadow-lg object-cover bg-cover m-auto `}
            style={{backgroundImage: `url("${props.img || anom}")`}}></div>
            <h3 className="text-center py-4">
                {props.name || 'Anonymous'}
            </h3>
            <p className="before:content-['“'] before:mr-4 before:text-4xl before:font-serif after:content-['”'] after:ml-4 after:text-4xl after:font-serif my-10">{props.children}</p>
            {reviewStars(props.score <= 10 && props.score >= 0 ? props.score : 10)}
            <h4 className="text-right">Rate:{props.score <= 10 && props.score >= 0 ? props.score : 10} /10</h4>
      </div>
    )
} 

export default Testimonial;


