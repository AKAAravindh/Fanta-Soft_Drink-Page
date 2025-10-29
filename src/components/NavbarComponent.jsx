import { CgMenuRightAlt } from "react-icons/cg";

function NavbarComponent() {
  return (
    <div className="w-full flex lg:grid lg:grid-cols-3 items-center justify-between text-white/80 bg-transparent py-6 px-[8%] fixed z-999 top-0 left-0">
      <h1 className="uppercase text-4xl font-montserrat font-bold leading-none tracking-tighter">
        Lemonades
      </h1>
      <nav className="text-md text-white/60 place-self-center hidden lg:block">
        <ul className="flex items-center gap-8">
          {["About", "Products", "News", "Contact"].map((item, idx) => (
            <li
              key={idx}
              className="px-3 rounded-full cursor-pointer transition-all duration-300 group relative isolate hover:text-white "
            >
              {item}
              <span className="absolute left-3 bottom-0 w-0 group-hover:w-[50%] h-0.5 rounded group-hover:bg-white transition-all duration-300"></span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-3xl place-self-end cursor-pointer hover:scale-110 transition-transform duration-300">
        <CgMenuRightAlt />
      </div>
    </div>
  );
}

export default NavbarComponent;
