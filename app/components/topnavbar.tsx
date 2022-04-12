import LogoKuliahku from "./logo"

export default function TopNavbar() {
    return (
      <>
        <nav className="flex flex-row my-5 justify-between align-middle">
          <div>
            <LogoKuliahku />
          </div>
          <div className="h-50 flex">
            <ul className="flex flex-row mx-10 items-center">
              <li className="text-white mx-4 hover:font-bold"><a href="/posts">Materi Kuliahku</a></li>
              <li className="text-white mx-4 hover:font-bold">Coretan</li>
              <li className="text-white mx-4 hover:font-bold">Referensi</li>
              <li className="text-white mx-4 hover:font-bold">Brainstorm Ide</li>
              <li className="text-white mx-4 border-2 rounded-lg px-3 py-2 border-white hover:border-sky-500 bg-black hover:bg-sky-500 hover:font-bold"><a href="/login">Login</a></li>
            </ul>
          </div>
        </nav>
      </>
    )
  }