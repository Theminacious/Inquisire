import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return (
    <nav className="sticky top-0 inset-x-0 h-14 w-full border-b border-gray-200 bg-slate-800/80 backdrop-blur-lg transition-all z-50">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href='/' className='flex z-40 font-semibold text-slate-200 hover:text-blue-400 transition-colors duration-300'>
            <span>Inquisire</span>
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
