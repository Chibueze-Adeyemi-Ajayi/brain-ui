import brain_logo from "../assets/img/brain_logo.JPG";

function Loader () {
    return <section className="w-full h-full flex flex-col">
        <img className="w-fit h-fit my-auto mx-auto shadow-white/9 shadow-xl rounded-xl" src={brain_logo}></img>
        <span className="loader mx-auto my-auto"></span>
    </section>
}

export default Loader;