const HeaderHome = () => {
    return (
        <header className="p-10 bg-white">
            <div className="flex justify-around">
                <h1 className="bg-blue-400 rounded p-3 inline-block text-white">Logo BRB</h1>
                <ul className="flex items-center gap-2">
                    <li className="relative p-1 pr-2 pl-2 rounded cursor-pointer text-black hover:text-blue-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1px] before:bg-black hover:before:w-full before:transition-all before:duration-300">
                        Exemplo 1
                    </li>
                    <li className="relative p-1 pr-2 pl-2 rounded cursor-pointer text-black hover:text-blue-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1px] before:bg-black hover:before:w-full before:transition-all before:duration-300">
                        Exemplo 2
                    </li>
                    <li className="relative p-1 pr-2 pl-2 rounded cursor-pointer text-black hover:text-blue-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1px] before:bg-black hover:before:w-full before:transition-all before:duration-300">
                        Exemplo 3
                    </li>
                    <li className="relative p-1 pr-2 pl-2 rounded cursor-pointer text-black hover:text-blue-500 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1px] before:bg-black hover:before:w-full before:transition-all before:duration-300">
                        Exemplo 4
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default HeaderHome;
