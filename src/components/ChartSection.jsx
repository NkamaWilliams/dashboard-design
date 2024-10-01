import BlueDot from "./BlueDot";
import OrangeDot from "./OrangeDot";
import Threedots from "./Threedots";
import IconCaretDown from "./IconCaretDown";
// import chartone from '../assets/Line_Chart.png'
import chartone from '../assets/line2.png'
import charttwo from '../assets/Circle_Chart.png'


export default function ChartSection() {
    return (
        <div className="mt-6 w-full flex items-start justify-between">
            <div className=" border w-3/4 border-gray-300 rounded-md py-5 pb-0 px-3">

                <div className="flex items-center justify-between">
                    <h2 className="font-semibold">Orders Analytics</h2>

                    <div className="flex items-center text-sm">
                        <div className="flex items-center mr-5"><BlueDot /> Offline Orders</div>
                        <div className="flex items-center mr-5"><OrangeDot />Online Orders</div>
                        <div className="flex items-center bg-white shadow px-2 py-1">
                            <span className="text-sm">Monthly</span>
                            <IconCaretDown />
                        </div>
                    </div>
                </div>

                <div className="bg-white my-height my-4">
                <img className="h-full" src={chartone} alt="Chart one" />
                </div>

            </div>


            <div className="reduce border w-1/3 border-gray-300 rounded-md py-5 pb-0 px-3">
                <div className="">
                    <div className="flex items-center justify-between">

                        <h2 className="font-semibold">Earnings</h2>


                        <div className="flex items-center text-sm">
                            <Threedots />
                        </div>

                    </div>
                    <div className="my-height flex items-center justify-center bg-white my-4">
                        <img className="h-full" src={charttwo} alt="Chart two" />
                    </div>

                </div>
            </div>


        </div>
    );
}
