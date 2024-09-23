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
                {image.text}
              </span>
              <p className="text-[24px] text-white bottom-10 absolute left-[52px] font-light">
                {image.subText}
              </p>
              <a
                href={image.link}
                rel="noreferrer noopener"
                className="absolute  border rounded-3xl px-3 py-2 text-white text-[24px] border-white bottom-10 right-[52px]
            cursor-pointer
            "
              >
                Case Study
              </a>
              <a />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const projectImages = [
  {
    img: "Veedez.png",
    link: "/projects/veedez",
    text: "Veedez Pay",
    subText: "Neobank",
  },
  {
    img: "Fara.png",
    link: "/projects/newFaramove",
    text: "Faramove",
    subText: "Cheap Logistic",
  },
  {
    img: "Jeeatar.png",
    link: "/projects/newJeetar",
    text: "Jeetar",
    subText: "Super App",
  },
  {
    img: "Alerzoshop.png",
    link: "/projects/alerzoshop", // Add appropriate page link
  },
];
