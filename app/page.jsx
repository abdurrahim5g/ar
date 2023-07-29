import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero-section py-10 md:py-20">
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
    </main>
  );
}
