import MobileMenu from "@/components/atoms/mobileMenu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="flex items-center justify-between" aria-label="NLP-icon">
                <span className="text-3xl text-yellow-100 ">
                  नेपाली  
                </span>
                <span className="text-cyan-100 text-xl ml-1">
                  Language Processing
                </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/textGenerator"
                  className="text-lg text-green-100 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Text Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/spellCorrector"
                  className="text-lg text-green-100 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Spelling Corrector
                </Link>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
