
import Sidebar from "./_components/sidebar"
import Profile from "./_components/profile"
import Navbar from "./_components/navbar"

export default function Home() {
  return (
    <main className="bg-bg text-primary h-screen w-screen">
      <div className="flex flex-row w-full h-full">
        <Sidebar>
          <Profile/>
        </Sidebar>
        <div className="flex flex-col w-full h-full">
          <Navbar>
            <h1 className="text-3xl py-4 px-6">Projects</h1>
          </Navbar>
        </div>
      </div>
    </main>
  )
}
