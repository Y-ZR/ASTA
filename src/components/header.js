import Link from 'next/link';
import Image from 'next/image';
import ASTA_LOGO from '../../public/ASTA.png';

export default function Header() {
  return (
    <header className="bg-black">
      <div className="container px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between text-white">
          <Link className="flex items-center space-x-2" href="/">
            <Image src={ASTA_LOGO} alt="ASTA Logo" width={50} height={50} />
          </Link>

          <nav className="hidden lg:flex lg:gap-4 lg:ml-auto">
            <Link className="text-sm font-medium" href="#">
              English
            </Link>
            <Link className="text-sm font-light" href="#">
              Español
            </Link>
            <Link className="text-sm font-light" href="#">
              Français
            </Link>
            <Link className="text-sm font-light" href="#">
              汉语
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}