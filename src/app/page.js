"use client";

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineEmergency } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";


export default function Home() {
  const scrollToSection = () => {
    const section = document.getElementById("help-section");
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  return (
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/hero.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">Welcome to ASTA</h2>
          <p className="text-md sm:text-lg md:text-xl mt-4 max-w-xl mx-auto">
            Connecting you with the resources and support you need to make a difference.
          </p>
          <Button onClick={scrollToSection} className="mt-8 inline-block text-white font-semibold py-2 px-4 rounded-lg">
            Explore Resources
          </Button>
        </div>
      </div>

      <div className="flex-1" id="help-section">
        <div className="flex flex-col items-center justify-center py-12 text-center md:py-24">
          <div className="space-y-3">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find the help you need</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                ASTA connects you with the resources and support you need to thrive and succeed.
              </p>
            </div>
            <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <form className="flex items-center justify-center gap-1 sm:gap-4 lg:gap-2 xl:gap-4 mt-10">
                <IoLocationSharp/>
                <p className="text-sm">892 Elgin Street, San Lorenzo, CA</p>
              </form>
            </div>
          </div>
        </div>
        

        <div className="flex justify-center">
          <div className="grid grid-cols-2 items-stretch justify-center gap-8 md:grid-cols-4 md:gap-16 mb-20">
            <Card className="w-full max-w-sm">
              <CardHeader className="p-4 flex flex-col items-center">
                <UtensilsIcon className="h-6 w-6" />
                <CardTitle className="mt-4 text-center">Food Assistance</CardTitle>
              </CardHeader>
              <CardContent className="p-4 text-sm">
                <p>Find local food banks, free meal programs, and resources to help you access the nutrition you need.</p>
              </CardContent>
              <CardFooter className="p-4">
                <Link className="w-full inline-block text-sm underline" href="/food">
                  View Resources
                </Link>
              </CardFooter>
            </Card>
            <Card className="w-full max-w-sm">
              <CardHeader className="p-4 flex flex-col items-center">
                <HomeIcon className="h-6 w-6" />
                <CardTitle className="mt-4 text-center">Housing Support</CardTitle>
              </CardHeader>
              <CardContent className="p-4 text-sm">
                <p>Access shelters, rental assistance, and housing programs in your area.</p>
              </CardContent>
              <CardFooter className="p-4">
                <Link className="w-full inline-block text-sm underline" href="house">
                  View Resources
                </Link>
              </CardFooter>
            </Card>
            <Card className="w-full max-w-sm">
              <CardHeader className="p-4 flex flex-col items-center">
                <ClubIcon className="h-6 w-6" />
                <CardTitle className="mt-4 text-center">Medical Aid</CardTitle>
              </CardHeader>
              <CardContent className="p-4 text-sm">
                <p>Connect with healthcare services, prescription assistance, and medical care.</p>
              </CardContent>
              <CardFooter className="p-4">
                <Link className="w-full inline-block text-sm underline" href="#">
                  View Resources
                </Link>
              </CardFooter>
            </Card>
            <Card className="w-full max-w-sm">
              <CardHeader className="p-4 flex flex-col items-center">
                <BriefcaseIcon className="h-6 w-6" />
                <CardTitle className="mt-4 text-center">Job Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="p-4 text-sm">
                <p>Find employment services, job training, and career resources to help you find work.</p>
              </CardContent>
              <CardFooter className="p-4">
                <Link className="w-full inline-block text-sm underline" href="#">
                  View Resources
                </Link>
              </CardFooter>
            </Card>
            
            <div className="hidden md:block md:col-span-1"></div>

            <Card className="w-full max-w-sm">
              <CardHeader className="p-4 flex flex-col items-center">
                <MdOutlineEmergency className="h-7 w-7" />
                <CardTitle className="mt-4 text-center">Emergency Contact</CardTitle>
              </CardHeader>
              <CardContent className="p-4 text-sm">
                <p>Connect to professionals for emergency services, crisis intervention, and immediate support.</p>
              </CardContent>
              <CardFooter className="p-4">
                <Link className="w-full inline-block text-sm underline" href="#">
                  View Terms & Conditions
                </Link>
              </CardFooter>
            </Card>
            <Card className="w-full max-w-sm">
              <CardHeader className="p-4 flex flex-col items-center">
                <VscFeedback className="h-7 w-7" />
                <CardTitle className="mt-4 text-center">Feedback</CardTitle>
              </CardHeader>
              <CardContent className="p-4 text-sm">
                <p>Tell us how we can improve our services and support to better meet your needs.</p>
              </CardContent>
              <CardFooter className="p-4">
                <Link className="w-full inline-block text-sm underline" href="#">
                  Contact Us
                </Link>
              </CardFooter>
            </Card>

            <div className="hidden md:block md:col-span-1"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BriefcaseIcon(props) {
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
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}


function ClubIcon(props) {
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
      <path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" />
      <path d="M12 17.66L12 22" />
    </svg>
  )
}


function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function UtensilsIcon(props) {
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
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  )
}