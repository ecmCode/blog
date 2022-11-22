
const BlogCard = (props) => {
    
   return( props.children && 
            <div className="w-auto shadow-lg px-6 py-12 rounded-lg backdrop-blur-sm bg-opacity-40 bg-purple-600 animate-[fadein_2s_ease-in-out] ring-1 ring-purple-800 text-purple-100">
                <h3 className="text-center py-6">
                    {props.title || 'Post'}
                </h3>
                <p>{props.children}</p>
            </div>
   )

}

export default BlogCard;