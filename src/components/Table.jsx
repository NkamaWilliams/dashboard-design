import IconSort from "./IconSort";
import Threedots from "./Threedots";
import GreenDot from './GreenDot'
import IconCaretDown from "./IconCaretDown";

export default function Table() {
    return (
        <div className="mt-6 border border-gray-300 rounded-md py-5 px-3">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold">Order List</h2>

                <div className="flex items-center bg-white shadow px-2 py-1">
                    <span className="text-sm">Monthly</span>
                    <IconCaretDown />
                </div>
            </div>
            <table className="w-full border-collapse mt-4">
                <tr>
                    <th>No</th>
                    <th>ID <IconSort /></th>
                    <th>Date</th>
                    <th>Customer Name <IconSort /></th>
                    <th>Location</th>
                    <th>Amount <IconSort /></th>
                    <th>Status Order <IconSort /></th>
                    <th>Action</th>
                </tr>

                <tr className="border-t border-gray-300">
                    <td>1</td>
                    <td>#12594</td>
                    <td>Dec 1, 2021</td>
                    <td>Frank Murio</td>
                    <td>312 S Wilmette Ave</td>
                    <td>$847.69</td>
                    {/* <td>New Order</td> */}
                    <td>
                        <div className="flex items-center justify-center w-max bg-white shadow px-2 py-1">
                            <GreenDot />
                            <span className="text-sm">New Order</span>
                        </div>
                    </td>
                    <td> <Threedots /></td>
                </tr>

                <tr className="border-t border-gray-300">
                    <td>2</td>
                    <td>#12594</td>
                    <td>Dec 1, 2021</td>
                    <td>Frank Murio</td>
                    <td>312 S Wilmette Ave</td>
                    <td>$847.69</td>
                    <td>
                        <div className="flex items-center justify-center w-max bg-white shadow px-2 py-1">
                            <GreenDot />
                            <span className="text-sm">New Order</span>
                        </div>
                    </td>
                    <td> <Threedots /></td>
                </tr>

                <tr className="border-t border-gray-300">
                    <td>3</td>
                    <td>#12594</td>
                    <td>Dec 1, 2021</td>
                    <td>Frank Murio</td>
                    <td>312 S Wilmette Ave</td>
                    <td>$847.69</td>
                    <td>
                        <div className="flex items-center justify-center w-max bg-white shadow px-2 py-1">
                            <GreenDot />
                            <span className="text-sm">New Order</span>
                        </div>
                    </td>
                    <td> <Threedots /></td>
                </tr>
            </table>
        </div>
    );
}
