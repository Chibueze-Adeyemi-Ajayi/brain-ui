import Chat from "../components/chat";
import NavigationBar from "../components/nav";

export default function Search () {
    return <section className="w-full h-full flex flex-col">
        {/* navigation bar */}
        <section className="fixed top-0 w-full h-fit">
            <NavigationBar />
        </section>

        {/* chat section */}
        <Chat />
        
    </section>
}