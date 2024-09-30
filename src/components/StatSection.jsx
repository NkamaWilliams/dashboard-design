import IconRefund from "./IconRefund";
import SlantUpIcon from "./SlantUpIcon";
import SlantDownIcon from "./SlantDownIcon";
import IconUsers from "./IconUsers";
import IconProducts from "./IconProducts";
import IconCheck from "./IconCheck";

export default function StatSection() {
    return (
        <div className="border mt-8 border-gray-300 rounded-md py-5">
            <div className="w-full flex items-center justify-between">

                <div className="p-3 border-r border-gray-300 w-1/4">
                    <div className="flex justify-between">
                        <h2 className="font-bold text-lg">89,935</h2>
                        <div className="bg-white shadow p-2 rounded-lg"><IconUsers /></div>
                    </div>
                    <p className="font-semibold text-sm mt-1">Total users</p>
                    <div className="flex items-center justify-between pr-8 text-gray-500 text-xs mt-3">
                        <div><SlantUpIcon /></div>
                        <p>10.2</p>
                        <div><p>+1.01% this week</p></div>
                    </div>
                </div>


                <div className="p-3 border-r border-gray-300 w-1/4">
                    <div className="flex justify-between">
                        <h2 className="font-bold text-lg">89,935</h2>
                        <div className="bg-white shadow p-2 rounded-lg"><IconProducts /></div>
                    </div>
                    <p className="font-semibold text-sm mt-1">Total users</p>
                    <div className="flex items-center justify-between pr-8 text-gray-500 text-xs mt-3">
                        <div><SlantUpIcon /></div>
                        <p>10.2</p>
                        <div><p>+1.01% this week</p></div>
                    </div>
                </div>


                <div className="p-3 border-r border-gray-300 w-1/4">
                    <div className="flex justify-between">
                        <h2 className="font-bold text-lg">89,935</h2>
                        <div className="bg-white shadow p-2 rounded-lg"><IconCheck /></div>
                    </div>
                    <p className="font-semibold text-sm mt-1">Total users</p>
                    <div className="flex items-center justify-between pr-8 text-gray-500 text-xs mt-3">
                        <div><SlantDownIcon /></div>
                        <p>10.2</p>
                        <div><p>+1.01% this week</p></div>
                    </div>
                </div>


                <div className="p-3 border-gray-300 w-1/4">
                    <div className="flex justify-between">
                        <h2 className="font-bold text-lg">89,935</h2>
                        <div className="bg-white shadow p-2 rounded-lg"><IconRefund /></div>
                    </div>
                    <p className="font-semibold text-sm mt-1">Total users</p>
                    <div className="flex items-center justify-between pr-8 text-gray-500 text-xs mt-3">
                        <div><SlantUpIcon /></div>
                        <p>10.2</p>
                        <div><p>+1.01% this week</p></div>
                    </div>
                </div>




            </div>
        </div>
    );
}
