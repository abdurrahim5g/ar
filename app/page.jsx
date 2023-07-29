import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero-area py-10 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="hero-text">
              <strong className="text-2xl">Hello 🖐 I am</strong>
              <h1 className="owner-name text-4xl lg:text-6xl font-bold leading-relaxed text-[--primary-color] my-3">
                Abdur Rahim
              </h1>
              <p className="text-xl">Frontend developer with React JS.</p>
              <div className="hero-action mt-10">
                <Link href="#">Get Resume</Link>
                <Link href="#">About Me</Link>
              </div>
            </div>
            <div className="hero-image">
              <Image
                src={"/hero.png"}
                alt="Hero image"
                width={1000}
                height={100}
                className="mt-12 md:mt-0"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area py-10 md:py-20 bg-gray-50" id="about">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="about-text">
              <h3 className="title">About me</h3>
              <h4 className="font-semibold">
                Frontend developer with React JS.
              </h4>
              <p className="mt-5 text-[--secondary-color]">
                Hello! I am Abdur Rahim, a passionate Frontend developer. I
                develop web applications. My core skill is based on JavaScript
                and I love to do most of the things using JavaScript. I love to
                make the web more open to the world. I have graduated with a
                bachelor degree in Electrical Engineering from Jessore
                Polytechnic Institure at Jessore, Bangladesh in 2021. I am
                available for any kind of job that suits skills.
              </p>
              <div className="hero-action mt-10">
                <Link href="#">Get Resume</Link>
                <Link href="#">About Me</Link>
              </div>
            </div>
            <div className="about-image">
              <Image
                src="/about.jpg"
                alt="About image"
                width={1000}
                height={100}
                className="mt-12 md:mt-0 rounded-lg shadow-lg"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-area py-10 md:py-20 " id="contact">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
            <div className="contact-text">
              <h3 className="title">contact me</h3>

              <p className="mt-5 text-[--secondary-color]">
                I am interested in working with Remote. Any company that thinks
                my skill will be helpful for them. If you are for someone like
                me, please let me know. Or you can just {"'Say hi,'"} to me.
              </p>
              <div className="hero-action mt-10">
                <Link href="#">Contact me</Link>
              </div>
            </div>
            <div className="contact-details">
              <div className="single-contact-info mb-5">
                <h4 className="text-xl text-black font-semibold">Email:</h4>
                <p>
                  <Link href="mailto:freelancerrahim26@gmail.com">
                    freelancerrahim26@gmail.com <span>recommend</span>
                  </Link>
                </p>
              </div>
              <div className="single-contact-info mb-5">
                <h4 className="text-xl text-black font-semibold">Skype:</h4>
                <p>
                  <Link
                    href="https://join.skype.com/invite/p7vc4mRwpGK8"
                    target="_blank"
                  >
                    Join Skype <span>Always available</span>
                  </Link>
                </p>
              </div>
              <div className="single-contact-info mb-5">
                <h4 className="text-xl text-black font-semibold">Linkedin:</h4>
                <p>
                  <Link
                    href="https://www.linkedin.com/in/abdurrahim5g/"
                    target="_blank"
                  >
                    Connect on Linkedin <span>1 day responce</span>
                  </Link>
                </p>
              </div>
              <div className="single-contact-info mb-5">
                <h4 className="text-xl text-black font-semibold">Facebook:</h4>
                <p>
                  <Link
                    href="https://www.facebook.com/devrahim26"
                    target="_blank"
                  >
                    Facebook <span>1 day responce</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
