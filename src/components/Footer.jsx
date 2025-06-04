import { Linkedin, Instagram, Facebook } from "lucide-react"

function Footer() {
    return (
    <footer className="bg-navy-blue text-white mt-40">
      <h1 className="flex flex-row justify-center py-10 text-4xl text-bolder gap-2"> 
        <span>Event</span>
        <span className="text-purple-800">Hive</span>
        </h1>
      <form className="flex flex-row gap-3 justify-center  mb-10">
        <input className="border bg-white text-gray-600  py-3" type="email" placeholder="Enter your mail" name="email" />
        <button className="border-line-purple bg-purple-700 text-white px-10 py-2" type="submit">Suscribe</button>
      </form>

      <div  className="flex flex-row gap-3 justify-center justify-content-space-between mb-5">
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Get in Touch</span>
        <span>FAQs</span>
      </div>
      <hr />
      <div className="flex flex-row place-content-between p-4">
        <div className="space-x-2">
            <button>English</button>
            <button>French</button>
            <button>Hindi</button>
        </div>
        <div className="flex flex-row ml-36 space-x-4">
            <Linkedin/>
            <Instagram/>
            <Facebook/>
        </div>
         <p className="">Non Copyrighted ©2025 Upload by EventHive</p>
      </div>
      </footer>
      );
      
}

export default Footer;