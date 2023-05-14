import Chat from "../components/chat";
import NavigationBar from "../components/nav";
import AllPage from "./all";

export default function Search () {
    return <section className="w-full h-full flex flex-col">
        {/* navigation bar */}
        <section className="fixed top-0 w-full h-fit">
            <NavigationBar />
        </section>

        {/* applcations several pages */}
        [
            {/* all page */}
            <AllPage />,
        ][0]

        {/* chat section */}
        {/* <Chat /> */}
        
    </section>
}