import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-white sm:text-xl 
       md:p-0 
      "
    >
      <div className="hover:bg-indigo-400 rounded-lg transition p-1 
                        ease-in-out delay-10">
        {title}</div>
      
    </Link>
  );
};

export default NavLink;
