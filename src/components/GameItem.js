import { FaAngleRight } from "react-icons/fa";
export default function GameItem({game}) {

    const playGame = async ()  => {
        console.log('Oyun başladı')
    }
	return (
        <div className="flex flex-col items-center bg-white md:flex-row  border-b-2 border-gray-100 ">
            <img className="object-contain w-full h-40 md:w-48" src={game.icon} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{game.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{game.description}</p>
                <div className="flex  justify-end ">
                    <button onClick={playGame} className="flex items-center gap-x-2 text-white bg-black hover:bg-blue-700  font-bold py-1 px-4" >Play <FaAngleRight size={22} /></button>
                </div>
            </div>
        </div>
    )
}