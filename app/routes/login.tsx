import Footer from "~/components/footer";
import TopNavbar from "~/components/topnavbar";

export default function LoginRoute() {
    return (
        <>
            <div className="max-h-full text-white">
                <TopNavbar />
                <div className="text-white mr-60 ml-60 mt-20">
                    <h1 className="text-4xl font-bold">Login Route</h1>
                    <div className="flex flex-col">
                        Login Form
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}