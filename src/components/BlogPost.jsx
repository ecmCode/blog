
const BlogPost = (props) => {
    
    return (
        <div className="BlogPost">
            <div>
                <h2>{props.title}</h2>
                <p>{props.children}</p>
            </div>
        </div>
    )

}

export default BlogPost;
