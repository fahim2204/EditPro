import Navbar from "../components/navbar";
import FilterRadio from "../components/filterRadio";

export default function Products() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl font-bold text-center mt-10">
            Visualize the power of AI (Where we can use it)
          </h3>
          <FilterRadio />
        </div>
      </div>
    </>
  );
}
