import PostsSlideIndex from "../components/postsslider"

export function LogoKuliahku() {
  return (
    <div className="max-w-150 ml-10">
      <a href="/"><img src="static/img/logokuliahku.png" alt="kuliahku.id" style={{ width: 150 }}></img></a>
    </div>
  )
}

export function TopNavbar() {
  return (
    <>
      <nav className="flex flex-row my-5 justify-between align-middle">
        <div>
          <LogoKuliahku />
        </div>
        <div className="h-50 flex">
          <ul className="flex flex-row mx-10 items-center">
            <li className="text-white mx-4 hover:font-bold">Materi Kuliahku</li>
            <li className="text-white mx-4 hover:font-bold">Coretan</li>
            <li className="text-white mx-4 hover:font-bold">Referensi</li>
            <li className="text-white mx-4 hover:font-bold">Brainstorm Ide</li>
            <li className="text-white mx-4 border-2 rounded px-3 py-2 border-white hover:border-sky-500 bg-black hover:bg-sky-500 hover:font-bold">Login</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default function Index() {
  return (
    <div className="font-sans">
      <TopNavbar />
      <div className="grid-cols-2">
        <div>
          <h1 className="text-8xl ml-24 mt-24 max-w-xl"><span className="text-white">Selamat Datang di</span> <span className="text-8xl text-sky-500 font-bold ">kuliahku.id</span></h1>
        </div>
        <div className="flex-auto">
          <PostsSlideIndex />
        </div>
      </div>
    </div>
  );
}
