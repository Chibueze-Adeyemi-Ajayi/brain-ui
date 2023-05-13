export default function Chat () {
    return <section className="fixed border-t border-gray-200 bottom-0 w-full bg-white shadow-lg p-4 ">
        <form className="w-fit flex flex-row space-x-2 px-4 mx-auto py-2 border border-gray-200 rounded-full">
            <input placeholder="Start a conversation" className="w-[800px] border-0 border-white focus:border-white"></input>
            <svg className="w-5 m-auto h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                <path className="fill-blue-600" d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"/>
            </svg>
            <svg className="w-5 m-auto h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path className="fill-blue-600" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"/>
            </svg>
        </form>
    </section>
}