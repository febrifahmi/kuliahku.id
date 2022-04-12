/* eslint-disable react/no-render-return-value */
import { Post } from "@prisma/client";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Footer from "~/components/footer";
import TopNavbar from "~/components/topnavbar"
import { db } from "~/utils/db.server";
import ReactDOM from "react-dom";

type LoaderData = { postsListItems: Array<Post> };

export const loader: LoaderFunction = async () => {
    const data: LoaderData = {
        postsListItems: await db.post.findMany(),
    };
    return json(data);
};

export default function PostsIndexRoute() {
    const data = useLoaderData();
    console.log(data)
    return (
        <>
            <TopNavbar />
            <div className="text-white mr-60 ml-60 mt-20">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex">
                        <h1 className="text-4xl font-bold">Materi Kuliahmu</h1>
                    </div>
                    <div className="flex flex-row">
                        <div id="searchBar"></div>
                        <button className="text-white hover:text-sky-500 mx-2 rounded-lg px-3 py-2 border-white hover:border-sky-500 hover:font-bold border" onClick={() => ReactDOM.render(
                            <div>
                                <input className="w-full h-10 bg-slate-500 border border-slate-700 rounded-lg pl-2"></input>
                            </div>, document.getElementById("searchBar")
                        )} onMouseLeave={()=>ReactDOM.render(<div></div>, document.getElementById("searchBar"))}><i className="ri-search-line"></i></button>
                        <div className="text-white mx-2 rounded-lg px-3 py-2 bg-sky-500 hover:font-bold"><a href="/posts/createpost">Buat Postingan</a></div>
                    </div>
                </div>
                <div className="mt-20">
                    {data.postsListItems.map((item: any) => (
                        <div key={item.id} className="bg-gray-900 text-lg text-white mt-20 rounded-lg p-10">
                            <div className="flex flex-row justify-between items-center">
                                <h1 className="font-bold">{item.title}</h1>
                                <p className="text-sm border border-white rounded-lg py-1 px-2">{item.lead}</p>
                            </div>
                            {/* todo: sanitize item.body so that IT NOT CONTAINS DANGEROUS JS code script inside of it OR set in TinyMCE Editor init -> valid_elements OR rely on default tinymce default valid elements*/}
                            <div className="mt-10"
                                dangerouslySetInnerHTML={{
                                    __html: `${item.body}`
                                }}>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}