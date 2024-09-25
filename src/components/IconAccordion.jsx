import chevron from "/chevron-down.svg"

export default function IconAccordion({src, text}){
  return(
    <>
    <div 
    className="flex justify-between items-center text-base text-primary hover:text-secondary hover:cursor-pointer font-medium">
      <p href="#" className="flex gap-3 my-3 items-center">
        <img src={src} alt={text} className="hover:fill-secondary"/>
        <span>{text}</span>
      </p>

      <img src={chevron} alt="icon"/>
    </div>

    {/* {
      viewAccordion && 
      <div className="text-base text-primary hover:text-secondary hover:cursor-pointer font-medium">
        {content.map(
          item => <p key={item}>{item}</p>
        )}
      </div>
    } */}
    </>
  )
}