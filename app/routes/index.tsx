import TopNavbar from "~/components/topnavbar";
import PostsSlideIndex from "../components/postsslider"
import Faq from "~/components/faqs";
import Footer from "~/components/footer";

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
