import Image from 'next/image'

const TopBar = () => {
    return (
        <nav className="flex relative w-full h-14 bg-nav-gray border-b border-gray-200 dark:bg-nav-gray dark:border-gray-700">
            <div className="px-3 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <Image src="/images/minecraft-grass-cube.svg" width={36} height={36} alt="Minecraft Logo" priority={true} />
                        <span className="self-center ml-2 text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Dashboard</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TopBar