export default function IconLink({src, text, type=1}){
  return(
    <a href="#" className={`flex gap-3 my-3 items-center text-base ${type === 1?"text-primary hover:text-secondary": "text-alert hover:opacity-60"} font-medium`}>
      <img src={src} alt={text}/>
      <span>{text}</span>
    </a>
  )
}