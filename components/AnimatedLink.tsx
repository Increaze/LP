export function AnimatedLink({ link, text }: { link: string; text: string }) {
    return (
      <a
        href={link}
        target={link.startsWith("http") ? "_blank" : "_self"}
        rel="noreferrer noopener"
        className="transition-all max-w-[48px] group-hover:max-w-[200px] duration-300 bg-gray2  border border-white rounded-full flex items-center p-3"
      >
        <span className="w-0 pr-0 text-lp-gray2 overflow-hidden text-sm transition-all duration-500 delay-75 opacity-0 whitespace-nowrap group-hover:w-full group-hover:pr-2 group-hover:opacity-100">
          {text}
        </span>
        <div className="h-[22px] w-[30px] flex items-center justify-center">
          <img src="/images/arrow-tr.svg" alt="" className="w-5 h-5" />
        </div>
      </a>
    );
  }
  