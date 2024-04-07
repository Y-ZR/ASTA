import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { FiSearch } from 'react-icons/fi';
import { FaRegClock } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";


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
  );
}


export default function Component() {
  return (
    <div className="flex flex-col min-h-screen mb-12">
      <header className="py-10 mt-8">
        <div className="container px-4 text-center">
          <div className="inline-block">
            <UtensilsIcon className="mx-auto text-current h-14 w-14" />
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Food Assistance Nearby</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find local food assistance resources in your community.
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
                  placeholder="Enter a location or place..."
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
              <CardContent className="p-4 md:p-6 flex">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold flex items-center">Community Kitchen</h3>
                    <p className="text-sm text-gray-500 flex items-center"><IoLocationSharp className="mr-2 w-4 h-4"/>123 Main St, Springfield, IL 62701</p>
                    <p className="text-sm text-gray-500 flex items-center"><IoCall className="mr-2"/>Contact: (217) 555-1234</p>
                    <p className="text-sm text-gray-500 flex items-center"><FaRegClock className="mr-2"/>Opening Hours: Mondays 12:00 p.m. to 2:30 p.m.</p>
                  </div>
                </CardContent>
              </Card>
            </li>
            <li>
              <Card>
                <CardContent className="p-4 md:p-6 flex">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold flex items-center">Food Pantry</h3>
                    <p className="text-sm text-gray-500 flex items-center"><IoLocationSharp className="mr-2 w-4 h-4"/>200 Elm St, Anytown, MA 02100</p>
                    <p className="text-sm text-gray-500 flex items-center"><IoCall className="mr-2"/>Contact: (508) 555-9876</p>
                    <p className="text-sm text-gray-500 flex items-center">Opening Hours: Tuesdays 10:00 a.m. to 12:00 p.m.</p>
                  </div>
                  
                </CardContent>
              </Card>
            </li>
            <li>
              <Card>
                <CardContent className="p-4 md:p-6 flex">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold flex items-center">Hope Center</h3>
                    <p className="text-sm text-gray-500 flex items-center"><IoLocationSharp className="mr-2 w-4 h-4"/>800 Oak Ave, Pleasantville, CA 90001</p>
                    <p className="text-sm text-gray-500 flex items-center"><IoCall className="mr-2"/>Contact: (310) 555-2468</p>
                    <p className="text-sm text-gray-500 flex items-center"><FaRegClock className="mr-2"/>Opening Hours: Wednesdays 9:00 a.m. to 1:00 p.m.</p>
                  </div>
                </CardContent>
              </Card>
            </li>
            <li>
              <Card>
                <CardContent className="p-4 md:p-6 flex">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold flex items-center">Community Food Bank</h3>
                    <p className="text-sm text-gray-500 flex items-center"><IoLocationSharp className="mr-2 w-4 h-4"/>500 Maple St, Rivertown, NY 10010</p>
                    <p className="text-sm text-gray-500 flex items-center"><IoCall className="mr-2"/>Contact: (212) 555-3698</p>
                    <p className="text-sm text-gray-500 flex items-center"><FaRegClock className="mr-2"/>Opening Hours: Thursdays 11:00 a.m. to 3:00 p.m.</p>
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