import { arrowUp } from "../assets"

export const Getstarted = () => {
  return (
    <div className="w-[140px] h-[140px] font-bold  rounded-full bg-blue-gradient p-[2px] cursor-pointer flex justify-center items-center">
        <div className="bg-primary w-[100%] h-[100%] rounded-full flex items-center justify-center flex-col">
        <div className="flex text-gradient">Get <img src={arrowUp} alt="" /></div>
        <p className="text-gradient">Started</p>
        </div>

    </div>
  )
}
