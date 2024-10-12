import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";

const Navbar = () => {

  return (
    <nav className="sticky top-0 inset-x-0 h-14 w-full border-b border-gray-500 bg-slate-700/90 backdrop-blur-lg transition-all z-50">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-slate-600">
          <Link
            href="/"
            className="flex z-40 font-semibold text-slate-100 hover:text-blue-400 transition-colors duration-300"
          >
            <span>Inquisire.</span>
          </Link>

          {/* Desktop Navbar */}
          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  className: "text-slate-200 hover:text-blue-400",
                })}
              >
                Pricing
              </Link>
              <LoginLink
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  className: "text-slate-200 hover:text-blue-400",
                })}
              >
                Sign in
              </LoginLink>
              <RegisterLink
                className={buttonVariants({
                  size: "sm",
                  className: "text-slate-100 bg-blue-600 hover:bg-blue-500",
                })}
              >
                Get Started
                <ArrowRight className="ml-1.5 h-5 w-5" />
              </RegisterLink>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
 