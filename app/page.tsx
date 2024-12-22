import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      {/* Left side */}
      <div className="text-3xl w-1/2 px-10">
        <Image 
        src="/fb.svg" 
        width={300} 
        height={100}
        alt="Facebook Logo" />

      <p className="ml-8 mt-3">
        Facebook helps you connect and share with the people in your life.
      </p>
      </div>
      {/* Right Side */}
      <div className="bg-white flex flex-col p-5 rouned-xl w-1/3">
        <input
         className="my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline outline-blue-600" 
        type="text" 
        placeholder="Email address or phone number" />
        <input
         className="my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline outline-blue-600"
        type="pasword" 
        placeholder="Pasword" />
        <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700">Login</button>
        <span className="my-2">
          <p className=" cursor-pointer text-blue-600 text-sm my-2 text-center hover:underline">Forgotten Pasword?</p>
          <hr />
        </span>
        <button className="bg-[#42b72a] my-2 py-2 px-4 text-lg font-bold text-white rounded-md hover:bg-[#42b72a] w-fit mx-auto">Create new account</button>
      </div>
      </div>

  )
}
