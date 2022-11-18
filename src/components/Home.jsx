import city from "/src/assets/city.jpg";
import lake from "/src/assets/lake.jpg";
import cat1 from "/src/assets/cat1.png";
import cat2 from "/src/assets/cat2.png";
import cat3 from "/src/assets/cat3.png";


import { WelcomePage, Title, About, Testimonial, Gridbox, BlogCard, Footer,Toolbox, } from '.'


const Home = () => {
  

  return (
    <div className="w-full h-full bg-gradient-to-bl from-rose-100 to-zinc-100"> 
      
      <WelcomePage />
      <Toolbox />
      <Title name="About Me" />      
        <About/>

      <Title name="Testimonials" />
        <Gridbox grid="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" url={city}>
          <Testimonial name='Tabby' img={cat2} score={8}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime totam, non, magni at dolorum sunt ullam quidem minus explicabo nesciunt, aspernatur aperiam suscipit? Doloribus culpa doloremque odio illum ullam!
          </Testimonial>
          <Testimonial name='Ginger' img={cat1} score={10}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum alias voluptas inventore et soluta? Quasi, non perferendis odit laboriosam, molestias fugit maxime quibusdam nemo ea itaque, corporis repellat quisquam.
          </Testimonial>
          <Testimonial name='Kitty' img={cat3} score={7}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias corrupti nesciunt rem dolorum autem! Aut, laboriosam? Eligendi, cumque nulla. Odit dolorum consectetur recusandae possimus at voluptatibus sit similique quaerat ratione!
          </Testimonial>
          <Testimonial score={100}>
            {/* The score automatically becomes 10 since an invalid value is provided*/}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, aut totam labore nam, eum placeat aperiam laborum blanditiis, sed excepturi delectus quidem quaerat dignissimos quibusdam. Culpa incidunt nobis illo.
          </Testimonial>
          <Testimonial score={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam nesciunt quod exercitationem nobis provident eum delectus maxime facilis voluptatum libero, cupiditate magni perferendis repudiandae! Eum aperiam adipisci necessitatibus voluptates.
          </Testimonial>
          <Testimonial score={0}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorum sit quaerat, tenetur non a! Id, et provident est architecto dicta soluta minima nulla eaque expedita illo cum, ipsa aut.
          </Testimonial>
          <Testimonial name='Missing'>
            {/* This Component doesn't show up since props.children isn't provided */}
          </Testimonial>
          <Testimonial name='Missing'>
            {/* This Component doesn't show up since props.children isn't provided */}
          </Testimonial>
        </Gridbox>

      <Title name="Blog Posts" />

      <Gridbox grid="grid-cols-1 md:grid-cols-2 lg:grid-cols-4" url={lake}>
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
        <BlogCard title='Missing'>
          {/* This Component doesn't show up since props.children isn't provided */}
        </BlogCard>
        <BlogCard title='Missing'>
          {/* This Component doesn't show up since props.children isn't provided */}
        </BlogCard>
      </Gridbox>

      <Footer />

    </div>
  )

}

export default Home