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
    </main>
  );
}
