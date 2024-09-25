import chevron from "/chevron-down.svg"

export default function IconNotify({src, text, value}){
  return(
    <>
    <div 
    className="flex justify-between items-center text-base text-primary hover:text-secondary hover:cursor-pointer font-medium">
      <p href="#" className="flex gap-3 my-3 items-center">
        <img src={src} alt={text} className="hover:fill-secondary"/>
        <span>{text}</span>
      </p>

      <span className="flex justify-center items-center w-6 bg-alert aspect-square text-white rounded-full">{value}</span>
    </div>
    </>
  )
}