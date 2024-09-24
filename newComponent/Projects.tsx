import Link from "next/link";

export default function Projects() {
  return (
    <section className="container mt-12">
      <h1 className="font-bold text-4xl my-6">Select Projects</h1>
      <div className="flex flex-col space-y-12 items-start text-xl">
        {projectImages.map((image) => (
          <div className="relative ">
            <Link key={image.img} href={""} passHref>
              <img
                src={`/images/${image.img}`}
                alt={image.img}
                className="cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:opacity-40"
              />
            </Link>
            <div className="opacity-0 hover:opacity-100 absolute inset-0 bg-lpBg rounded-3xl">
              <span className="text-[50px] text-white bottom-20 absolute left-[52px] font-semibold">
                {image.title}
              </span>
              <p className="text-[24px] text-white bottom-10 absolute left-[52px] font-light">
                {image.text}
              </p>
              <a
                href={image.link}
                rel="noreferrer noopener"
                className="absolute border rounded-3xl px-3 py-2 text-white text-[24px] border-white bottom-10 right-[52px] cursor-pointer"
              >
                {image.subText}
              </a>
              <a />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const projectImages: Array<{
  img: string;
  link?: string;
  title?: string;
  text?: string;
  subText: string;
}> = [
  {
    img: "Veedez.png",
    link: "/projects/veedez",
    title: "Veedez Pay",
    text: "Neobank",
    subText: "Case study",
  },
  {
    img: "Fara.png",
    link: "/projects/faramove",
    title: "Faramove",
    text: "Cheap Logistic",
    subText: "Case study",
  },
  {
    img: "Jeeatar.png",
    link: "/projects/jeetar",
    title: "Jeetar",
    text: "Super App",
    subText: "Case study",
  },
  {
    img: "Alerzoshop.png",
    title: "Alerzoshop",
    text: "B2B E-commerce",
    subText: "Case study -Coming Soon",
  },
];
