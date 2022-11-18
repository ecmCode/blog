
const BlogCard = (props) => {
    
   return( props.children && 
            <div className="w-auto shadow-lg px-6 py-12 rounded-lg backdrop-blur-md bg-orange-200 animate-[fadein_2s_ease-in-out] bg-opacity-60 ring-1 ring-zinc-600 text-zinc-900">
                <h3 className="text-center py-6">
                    {props.title || 'Post'}
                </h3>
                <p>{props.children}</p>
            </div>
   )

}

export default BlogCard;