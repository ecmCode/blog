import lake from "/src/assets/lake.jpg";
import {BlogCard, Gridbox} from '.'

const Blog = () => {
    
    return(
        <div className="w-full h-screen bg-gradient-to-tl from-purple-600 to-rose-600 ">
            <div className="flex flex-col h-screen w-full shadow-xl text-center p-20">
                <h1>Blog</h1>
                <Gridbox grid="grid-cols-1 md:grid-cols-2" url={lake}>
                    <BlogCard title='Hello world'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, optio debitis sapiente exercitationem beatae, quidem doloremque neque minus harum distinctio sunt ratione consequatur nesciunt, dolor voluptate explicabo similique. Id, odio.
                    </BlogCard>
                    <BlogCard title='Lorem ipsum.'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt unde magnam tempora incidunt quod. Cumque debitis officia minima ratione, dolorem accusantium aspernatur obcaecati maiores autem consectetur, impedit cum dignissimos minus.
                    </BlogCard>
                    <BlogCard>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, maiores. Explicabo aut eum a repellendus fuga possimus omnis totam sapiente. Officiis neque amet possimus minima placeat aliquid impedit. Praesentium, nisi.
                    </BlogCard>
                    <BlogCard>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa unde esse provident cupiditate porro eos. Non, officiis cum cumque deserunt deleniti libero numquam maiores adipisci blanditiis placeat. Laborum, quia!
                    </BlogCard>
                    <BlogCard>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa unde esse provident cupiditate porro eos. Non, officiis cum cumque deserunt deleniti libero numquam maiores adipisci blanditiis placeat. Laborum, quia!
                    </BlogCard>
                </Gridbox>
            </div>
        </div>
    )

}

export default Blog;
