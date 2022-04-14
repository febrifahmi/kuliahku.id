/* eslint-disable react/no-render-return-value */
import { Post } from "@prisma/client";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Footer from "~/components/footer";
import TopNavbar from "~/components/topnavbar"
import { db } from "~/utils/db.server";
import ReactDOM from "react-dom";
import { useState } from "react";

type LoaderData = { postsListItems: Array<Post> };

export const loader: LoaderFunction = async () => {
    const data: LoaderData = {
        postsListItems: await db.post.findMany(),
    };
    return json(data);
};


export default function PostsIndexRoute() {
    const [searchText, setSearchText] = useState("");
    const data = useLoaderData();
    const [filteredData, setFilteredData] = useState(data.postsListItems)
    // console.log(filteredData)
    return (
        <>
            <TopNavbar />
            <div className="text-white mr-60 ml-60 mt-20">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex">
                        <h1 className="text-4xl font-bold">Materi Kuliahmu</h1>
                    </div>
                    <div className="flex flex-row">
                        <div id="searchBar" className="flex align-middle items-center"></div>
                        <button className="text-white hover:text-sky-500 mx-2 rounded-lg px-3 py-2 border-white hover:border-sky-500 hover:font-bold border" onMouseOver={() => ReactDOM.render(
                            <div>
                                <input className="w-full h-10 bg-slate-500 border border-slate-700 rounded-lg pl-2" id="keyword" onChange={e => setSearchText(e.target.value)}></input>
                            </div>, document.getElementById("searchBar")
                        )} onClick={() => {
                            var newData = []; for (let i = 0; i < data.postsListItems.length; i++) {
                                if (data.postsListItems[i].title.includes(searchText) || data.postsListItems[i].body.includes(searchText)) {
                                    newData.push(data.postsListItems[i])
                                }
                            };
                            setFilteredData(newData)
                        }}><i className="ri-search-line"></i></button>
                        {/* todo: ubah onClick di atas dengan fungsi untuk memproses data yang mengandung keyword yg dicari saja */}
                        <div className="text-white mx-2 rounded-lg px-3 py-2 bg-sky-500 hover:font-bold"><a href="/posts/createpost">Buat Postingan</a></div>
                    </div>
                </div>
                <div className="mt-20">
                    {filteredData.map((item: any) => (
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