import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { FiSearch } from 'react-icons/fi';
import { IoCall } from "react-icons/io5";
import { MdOutlineEmergency } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";


export default function Emergency() {
  return (
    <div className="flex flex-col min-h-screen mb-12">
      <header className="py-10 mt-8 mb-4">
        <div className="container px-4 text-center">
          <div className="inline-block mb-1">
            <MdOutlineEmergency className="mx-auto text-current h-14 w-14" />
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"> Emergency Contacts </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Quickly find emergency contact numbers for different services.
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="">
          <div className="container px-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center flex-1 bg-white border border-gray-300 rounded-md">
                <FiSearch className="ml-4 text-gray-500" />
                <input
                  className="flex-1 py-2 px-4 outline-none"
                  id="search"
                  placeholder="Search for emergency services..."
                  type="search"
                />
              </div>
              <Button className="w-24">
                Search
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container px-4 py-8 space-y-8">
          <ul className="grid gap-4">
            <li>
              <Card>
                <CardHeader className="flex flex-col">
                  <h3 className="text-xl font-bold">Medical Emergencies</h3>
                  <p className="text-sm text-gray-500 peer dark:text-gray-400">
                    Call for immediate medical assistance or ambulance services.
                  </p>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid grid-cols-1 items-center gap-2">
                    <Button className="bg-red-600" size="sm"><IoCall className="mr-2"/>911</Button>
                  </div>
                </CardContent>
              </Card>
            </li>

            <li>
              <Card>
                <CardHeader className="flex flex-col">
                  <h3 className="text-xl font-bold">National Suicide Prevention Lifeline</h3>
                  <p className="text-sm text-gray-500 peer dark:text-gray-400">
                    The Lifeline provides 24/7, free and confidential support for people in distress, prevention and crisis
                    resources for you or your loved ones, and best practices for professionals.
                  </p>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid grid-cols-1 items-center gap-2">
                    <Button size="sm"><IoCall className="mr-2"/>1-800-273-TALK (8255)</Button>
                  </div>
                  <div className="grid grid-cols-1 items-center gap-2">
                    <Button size="sm"><IoChatboxEllipses className="mr-2"/>Chat Online</Button>
                  </div>
                </CardContent>
              </Card>
            </li>

            <li>
              <Card>
                <CardHeader className="flex flex-col">
                  <h3 className="text-xl font-bold">National Domestic Violence Hotline</h3>
                  <p className="text-sm text-gray-500 peer dark:text-gray-400">
                    The Hotline provides 24/7, free and confidential support for people in distress, prevention and crisis resources for you or your loved ones, and best practices for professionals.
                  </p>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid grid-cols-1 items-center gap-2">
                    <Button size="sm"><IoCall className="mr-2"/>1-800-799-SAFE (7233)</Button>
                  </div>
                  <div className="grid grid-cols-1 items-center gap-2">
                    <Button size="sm"><IoChatboxEllipses className="mr-2"/>Chat Online</Button>
                  </div>
                </CardContent>
              </Card>
            </li>

            <li>
              <Card>
                <CardHeader className="flex flex-col">
                  <h3 className="text-xl font-bold">National Sexual Assault Hotline</h3>
                  <p className="text-sm text-gray-500 peer dark:text-gray-400">
                    Nationwide referrals for specialized counseling and support groups. Routes calls to local sex assault 
                    crisis centers for resources and referrals. Spanish available.
                  </p>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid grid-cols-1 items-center gap-2">
                    <Button size="sm"><IoCall className="mr-2"/>1-800-656-HOPE (4673)</Button>
                  </div>
                  <div className="grid grid-cols-1 items-center gap-2">
                    <Button size="sm"><IoChatboxEllipses className="mr-2"/>Chat Online</Button>
                  </div>
                </CardContent>
              </Card>
            </li>

          </ul>
        </div>
      </main>
    </div>
  )
}