import Image from "next/image"

export default function Profile() {
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-row justify-start items-center px-6 py-6">
        <Image src={"/profile.jpg"} width={120} height={120} alt="Rob Wakefield"
          className="rounded-full"/>
        <div className="flex flex-col pl-6">
          <h1 className="text-2xl">Rob Wakefield</h1>
          <h2 className="text-sm text-secondary">MEng Computer Science</h2>
          <h2 className="text-sm text-secondary">Imperial College London</h2>
        </div>
      </div>
    </div>
  )
}