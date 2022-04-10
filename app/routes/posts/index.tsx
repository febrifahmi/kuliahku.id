import { Post } from "@prisma/client";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import TopNavbar from "~/components/topnavbar"
import { db } from "~/utils/db.server";

type LoaderData = { postsListItems: Array<Post> };

var ReactDOM = require('react-dom');

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
                    <div className="text-white mx-4 rounded-lg px-3 py-2 bg-sky-500 hover:font-bold"><a href="/posts/createpost">Buat Postingan</a></div>
                </div>
                <div className="mt-20">
                    {data.postsListItems.map((item: any) => (
                        <div key={item.id} className="bg-gray-900 text-lg text-white mt-20 rounded-lg p-10">
                            <div className="flex flex-row justify-between items-center">
                                <h1 className="font-bold">{item.title}</h1>
                                <p className="text-sm border border-white rounded-lg py-1 px-2">{item.lead}</p>
                            </div>
                            <div className="mt-10"
                                dangerouslySetInnerHTML={{
                                    __html: `${item.body}`
                                }}>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}