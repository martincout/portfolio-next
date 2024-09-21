import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-white sm:text-xl transition hover:scale-110
       md:p-0 
      "
    >
      <div className=" rounded-xl transition p-1 
                        ease-in-out delay-10">
        {title}</div>
      
    </Link>
  );
};

export default NavLink;
