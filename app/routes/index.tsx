import PostsSlideIndex from "../components/postsslider"
import Faq from "~/components/faqs";

import { Post } from "@prisma/client";
import {
  json,
  LoaderFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

type LoaderData = { postsListItems: Array<Post> };

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    postsListItems: await db.post.findMany(),
  };
  return json(data);
};

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
            <li className="text-white mx-4 hover:font-bold"><a href="/posts">Materi Kuliahku</a></li>
            <li className="text-white mx-4 hover:font-bold">Coretan</li>
            <li className="text-white mx-4 hover:font-bold">Referensi</li>
            <li className="text-white mx-4 hover:font-bold">Brainstorm Ide</li>
            <li className="text-white mx-4 border-2 rounded-lg px-3 py-2 border-white hover:border-sky-500 bg-black hover:bg-sky-500 hover:font-bold">Login</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export function Footer() {
  return (
    <>
      <footer className="flex mt-5 bottom-0 h-20 items-center">
        <div className="flex mx-10 px-10">
          <ul className="flex flex-row text-gray-600 justify-between align-middle">
            <li className="mx-5">Made with &#9787; by Febri Fahmi Hakim</li>
            <li className="mx-5"><i className="ri-discord-fill"></i>Discord</li>
            <li className="mx-5">Kebijakan Layanan</li>
            <li className="mx-5">Kebijakan Privasi</li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default function Index() {
  const data = useLoaderData<LoaderData>();
  return (
    <div className="font-sans">
      <TopNavbar />
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-8xl ml-24 mt-20 max-w-xl"><span className="text-white">Selamat Datang di</span> <span className="text-8xl text-sky-500 font-bold ">kuliahku.id</span></h1>
          <div className="text-xl">
            <p className="ml-24 mt-10 text-gray-400 max-w-lg"><span className="text-sky-500 font-bold underline decoration-yellow-500 decoration-4">kuliahku.id</span> merupakan platform bersama untuk berbagi <span className="font-bold text-slate-400">materi kuliah</span>, <span className="font-bold text-slate-400">catatan kuliah</span>, <span className="font-bold text-slate-400">coretan-coretan kuliah</span>, dan <span className="font-bold text-slate-400">ide-ide segar</span> terkait pembelajaran, penelitian, dan pengembangan yang dapat dibagikan oleh sesama dosen/pengajar, dosen kepada mahasiswa, atau sesama mahasiswa. Belajar dan berbagi, <span className="italic">yuk</span> mulai dari sini!</p>
          </div>
          <div className="mt-10 ml-24 flex flex-row justify-between max-w-lg">
            <a className="text-2xl font-bold text-white hover:text-sky-500 py-2 px-20 border-2 rounded-lg border-white hover:border-sky-500 bg-black hover:font-bold" href="/posts">Jelajahi</a>
            <a className="text-2xl font-bold text-white py-2 px-20 rounded-lg bg-sky-500" href="/">Gabung</a>
          </div>
        </div>
        <div className="flex-auto mt-20">
          <PostsSlideIndex data={data} />
        </div>
      </div>
      <Faq />
      <Footer />
    </div>
  );
}
