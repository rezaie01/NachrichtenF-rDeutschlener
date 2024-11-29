import BurgerMenu from "../burgerMenu/BurgerMenu";

export default function Header() {
    return <header className="absolute top-0 z-10 bg-transparent text-white p-4 flex w-full space-between items-center">
        <div className="">
            <BurgerMenu />
        </div>
        <h1 className="flex-1 text-center text-[1.10rem] sm:text-xl md:text-2xl lg:text-3xl font-bold">Nachrichten <span className="md:text-sm text-xs text-red-300">für</span> Deutschlerner</h1>


    </header>
}   