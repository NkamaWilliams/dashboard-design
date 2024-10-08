import logo from "/Logo.png"
import IconLink from "./IconLink"
import IconAccordion from "./IconAccordion"
import IconNotify from "./IconNotify"

export default function Sidebar(){
  return(
    <nav className="flex flex-col max-w-56 tablet:max-w-72 w-full max-h-screen box-border m-7 mr-0 tablet:m-14 tablet:mr-0">
      <img src={logo} alt="Aeon Logo" width={87} height={30}/>

      <div className="flex-1 box-border flex flex-col justify-between items-between border-r-2 border-primary-muted">
        <div className="my-10 max-w-48">
          <IconLink src="/chart.svg" text="Overview"/>
          <IconAccordion src="/case.svg" text="Product"/>
          <IconAccordion src="/user.svg" text="Orders"/>
          <IconNotify src="/checkout.svg" text="Orders" value={2}/>
          <IconLink src="/settings.svg" text="Settings"/>
        </div>

        <div className="max-w-48">
          <IconLink src="/info.svg" text="Help Center"/>
          <IconLink src="/chat.svg" text="Contact Us"/>
          <IconLink src="/logout.svg" text="Log Out" type={2}/>
        </div>
      </div>
    </nav>
  )
}