import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { FiSearch } from 'react-icons/fi'; 

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-10 mt-10">
        <div className="container px-4 text-center">
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
                <CardContent className="p-4 md:p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Community Kitchen</h3>
                    <p className="text-sm text-gray-500">123 Main St, Springfield, IL 62701</p>
                    <p className="text-sm text-gray-500">Contact: (217) 555-1234</p>
                  </div>
                </CardContent>
              </Card>
            </li>
            <li>
              <Card>
                <CardContent className="p-4 md:p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Food Pantry</h3>
                    <p className="text-sm text-gray-500">200 Elm St, Anytown, MA 02100</p>
                    <p className="text-sm text-gray-500">Contact: (508) 555-9876</p>
                  </div>
                </CardContent>
              </Card>
            </li>
            <li>
              <Card>
                <CardContent className="p-4 md:p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Hope Center</h3>
                    <p className="text-sm text-gray-500">800 Oak Ave, Pleasantville, CA 90001</p>
                    <p className="text-sm text-gray-500">Contact: (310) 555-2468</p>
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