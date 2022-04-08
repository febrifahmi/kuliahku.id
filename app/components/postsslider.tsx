export default function PostsSlideIndex({ data }: any) {
    return (
        <>
            <div className="rounded-3xl h-164">
                <div className="rounded-l-3xl bg-gradient-to-r h-164 from-cyan-500 to-blue-500">
                    <img className="mix-blend-overlay mt-0 min-w-96" src="static/img/students.png" alt="..."></img>
                    <div className="text-slate-600 text-xs flex justify-end mr-3">&copy;photo by: <span> <a href="https://pixabay.com/users/geralt-9301/">geralt</a> and <a href="https://pixabay.com/users/nastya_gepp-3773230/"> natsya_gepp </a></span></div>
                    <div className="py-10 px-20">
                        {/* {data.postsListItems.map((item:any) => (
                            <div key={item.id}>
                                <h1>Test</h1>
                            </div>
                        ))} */}
                    </div>
                </div>
            </div>
        </>
    )
}