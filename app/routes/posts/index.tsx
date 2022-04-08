import TopNavbar from "~/components/topnavbar"

export default function PostsIndexRoute() {
    return (
        <>
            <TopNavbar />
            <div className="text-white">
                <h1>Posts Index Route</h1>
                <div><a href="/posts/createpost">Create Post</a></div>
            </div>
        </>
    )
}