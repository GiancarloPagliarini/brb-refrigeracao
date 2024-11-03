const HeaderHome = () => {
    return (
        <header className="px-8 py- bg-white">
            <div className="flex justify-around">
                <img src="./images/logoAntiga.jpg" className="w-32 my-6" />
                <ul className="flex items-center gap-2">
                    <li className="relative p-1 pr-2 pl-2 rounded cursor-pointer text-black hover:text-blue-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1px] before:bg-blue-500 hover:before:w-full before:transition-all before:duration-300">
                        Orçamentos
                    </li>
                    <li className="relative p-1 pr-2 pl-2 rounded cursor-pointer text-black hover:text-blue-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1px] before:bg-blue-500 hover:before:w-full before:transition-all before:duration-300">
                        O que nos diferencia?
                    </li>
                    <li className="relative p-1 pr-2 pl-2 rounded cursor-pointer text-black hover:text-blue-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1px] before:bg-blue-500 hover:before:w-full before:transition-all before:duration-300">
                        Entre em contato
                    </li>
                    <li className="relative p-1 pr-2 pl-2 rounded cursor-pointer text-black hover:text-blue-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1px] before:bg-blue-500 hover:before:w-full before:transition-all before:duration-300">
                        Sobre nós
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default HeaderHome;
