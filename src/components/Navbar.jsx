export default function Navbar() {
    return (
        <nav className="flex flex-row justify-around mt-10">
            <h1 className="flex flex-row text-2xl font-bold gap-2">
                <span className="">Event</span>
                <span className="text-purple-800">Hive</span>
            </h1>
            <div  className="flex flex-row gap-10">
                <button>Login</button>
                <button className="border cursor-pointer bg-purple-700 text-white px-4 py-1">Signup</button>
            </div>
        </nav>
    )
}