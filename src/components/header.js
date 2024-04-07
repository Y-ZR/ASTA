import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-black">
      <div className="container px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between text-white">
          <Link className="flex items-center space-x-2" href="/">
            <Image src="/asta.png" alt="ASTA Logo" width={50} height={50} />
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

function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}