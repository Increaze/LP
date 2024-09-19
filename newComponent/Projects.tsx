import Link from "next/link";

export default function Projects() {
  return (
    <section className="container mt-12">
      <h1 className="font-bold text-4xl my-6">Select Projects</h1>
      <div className="flex flex-col space-y-12 items-start text-xl">
        {projectImages.map((image) => (
          <Link key={image.img} href={image.link} passHref>
            <img
              src={`/images/${image.img}`}
              alt={image.img}
              className="cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:opacity-40"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

const projectImages = [
  {
    img: "Veedez.png",
    link: "/projects/veedez", // Add appropriate page link
  },
  {
    img: "Fara.png",
    link: "/projects/newFaramove", // Add appropriate page link
  },
  {
    img: "Jeeatar.png",
    link: "/projects/jeetar", // Add appropriate page link
  },
  {
    img: "Alerzoshop.png",
    link: "/projects/alerzoshop", // Add appropriate page link
  },
];
