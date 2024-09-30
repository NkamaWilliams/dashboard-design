import Table from "./Table";
import DashboardGreet from "./DashboardGreet";
import ChartSection from "./ChartSection";
import StatSection from "./StatSection";

export default function DashBoard() {
  return (
    <div className=" dashBoard px-8 py-14 w-screen sm:w-full">
      <DashboardGreet />
      <StatSection />
      <ChartSection />
      <Table />
    </div>
  );
}

// Changed margin-right to 0 from williams