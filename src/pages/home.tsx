import { Github, Hyphen, LinkedIn, Upwork } from "../components/icons";
import { navList, socialList, aboutMeContent } from "../data";

const resolveSocialIcons = (type: (typeof socialList)[number]["title"]) => {
  switch (type) {
    case "Github":
      return <Github />;
    case "LinkedIn":
      return <LinkedIn />;
    case "Upwork":
      return <Upwork />;
    default:
      return <Github />;
  }
};
const Home = () => {
  return (
    <main>
      <div className="container mx-auto px-4">
        <div className="lg:grid lg:grid-cols-3 gap-5 h-screen">
          <div className="col-span-1">
            <div className="relative h-full">
              <div className="py-20">
                <h1 className="text-5xl font-semibold mb-5">
                  Hello, I'm
                  <br />
                  Manjot Singh
                </h1>
                <p className="text-xl">{aboutMeContent}</p>
              </div>
              <nav className="hidden md:block">
                <ul>
                  {navList?.map((item, index) => (
                    <li>
                      <a href={item.href}>
                        <span className="flex items-center gap-2">
                          {`0${index + 1}`}
                          <Hyphen />
                          <span className="underline">{item.title}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="static lg:absolute mt-20 lg:mt-0 lg:left-0 lg:bottom-5 xxl:bottom-20 lg:right-0">
                <ul>
                  <li className="inline-block me-5">
                    <a href={"/"} target="_blank">
                      <span className="flex items-center gap-2">
                        <img
                          height={30}
                          width={30}
                          className="rounded"
                          src={
                            "https://media.licdn.com/dms/image/D5603AQEUJr6OTD7_eQ/profile-displayphoto-shrink_800_800/0/1711115344980?e=1716422400&v=beta&t=ACrS7Q4xsCWH1mF3HNu3Kjp1HlzdIyPCL7GdHcKxAMM"
                          }
                          alt=""
                        />
                      </span>
                    </a>
                  </li>
                  {socialList?.map((item) => (
                    <li className="inline-block me-5">
                      <a href={item.href} target="_blank">
                        <span className="flex items-center gap-2">
                          {resolveSocialIcons(item.title)}
                          <p>{item.title}</p>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div id="projects" className="h-screen overflow-auto py-20 px-10">
              <div className="mb-20">
                <h2 className="text-3xl mb-10">Projects</h2>
                <div className="h-[200px] bg-stone-700 rounded flex justify-center items-center">
                  <p className="text-xl text-center">Coming Soon!</p>
                </div>
              </div>
              <div id="testimonials" className="mb-20">
                <h2 className="text-3xl mb-10">Testimonial</h2>
                <div className="h-[200px] bg-stone-700 rounded flex justify-center items-center">
                  <p className="text-xl text-center">Coming Soon!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
