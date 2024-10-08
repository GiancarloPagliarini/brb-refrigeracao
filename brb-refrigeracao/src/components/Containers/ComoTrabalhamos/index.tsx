const ComoTrabalhamos = () => {

    return (
        <div className="container mx-auto px-4 pt-52 mb-32">
            <div className="sm:flex items-center justify-between">
                <div className="flex flex-col font-bold text-4xl gap-2">
                    <div className="w-1/4 h-0.5 bg-zinc-400"></div>
                    Nossos Serviços de <span className="text-blue-400">Refrigeração</span>
                    <a
                        className="bg-blue-400 text-white text-base text-center p-2 rounded-md w-4/6 mt-3 mb-7"
                        href=""
                        target="_blank">
                        Conheça nossos clientes
                    </a>
                </div>
                <div>
                    <img
                        className="rounded-lg"
                        src="../images/group1.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default ComoTrabalhamos