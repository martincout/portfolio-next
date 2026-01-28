import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block font-semibold py-2 pl-3 pr-4 text-slate-700 dark:text-slate-200 sm:text-xl transition-all hover:text-primary-600 dark:hover:text-accent-400 hover:scale-105 md:p-0"
    >
      <div className="rounded-xl transition-all p-1 ease-in-out">
        {title}
      </div>
    </Link>
  );
};

export default NavLink;
