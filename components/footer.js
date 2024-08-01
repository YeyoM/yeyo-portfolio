export default function Footer() {
  return (
    <div className="flex flex-col w-[90%] max-w-[990px] mt-0">
      <hr className="w-full border-black border-opacity-50 mt-2" />
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex items-center space-x-1 sm:space-x-4">
          <a href="mailto:yeyomoreno2003@hotmail.com" className="text-gray-600 hover:text-gray-900 hover:font-medium underline decoration-2 decoration-[#2292BF] tracking-wider">email</a>
          <span className="text-gray-600">/</span>
          <a href="https://www.linkedin.com/in/diego-emilio-moreno-sanchez/" className="text-gray-600 hover:text-gray-900 hover:font-medium underline decoration-2 decoration-[#2292BF] tracking-wider">LinkedIn</a>
          <span className="text-gray-600">/</span>
          <a href="https://github.com/YeyoM" className="text-gray-600 hover:text-gray-900 hover:font-medium underline decoration-2 decoration-[#2292BF] tracking-wider">GitHub</a>
          <span className="text-gray-600">/</span>
          <a href="https://www.instagram.com/yeyo.moreno?igsh=MWt0OWE3ZmQyNGE2NA%3D%3D&utm_source=qr" className="text-gray-600 hover:text-gray-900 hover:font-medium underline decoration-2 decoration-[#2292BF] tracking-wider">Instagram</a>
        </div>
        <p className="text-md font-normal text-black tracking-wide mt-6 mb-12">
          © 2023 YeyoM
        </p>
      </div>
    </div>
  )
}