const HeaderHome = () => {

    return (
        <header className="p-9 bg-white">
            <div className="flex justify-around">
                <h1 className="bg-gray-400 rounded p-3 inline-block text-white font-semibold">Logo BRB</h1>
                <ul className="flex items-center gap-2">
                    <li className="p-1 pr-2 pl-2 rounded cursor-pointer hover:bg-blue-400 duration-100 hover:text-white">Exemplo 1</li>
                    <li className="p-1 pr-2 pl-2 rounded cursor-pointer hover:bg-blue-400 duration-100 hover:text-white">Exemplo 2</li>
                    <li className="p-1 pr-2 pl-2 rounded cursor-pointer hover:bg-blue-400 duration-100 hover:text-white">Exemplo 3</li>
                    <li className="p-1 pr-2 pl-2 rounded cursor-pointer hover:bg-blue-400 duration-100 hover:text-white">Exemplo 4</li>
                </ul>
            </div>
        </header>
    )
}

export default HeaderHome