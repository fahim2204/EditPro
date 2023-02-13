import FilterRadioBox from "./filterRadioBox";
export default function FilterRadio() {
  return (
    <>
      <ul className="flex flex-wrap w-full justify-center mt-10">
        <li>
          <FilterRadioBox category="People"/>
        </li>
        <li>
          <FilterRadioBox category="Product"/>
        </li>
        <li>
          <FilterRadioBox category="Car"/>
        </li>
        <li>
          <FilterRadioBox category="Animals"/>
        </li>
        <li>
          <FilterRadioBox category="Graphics"/>
        </li>
        <li>
          <FilterRadioBox category="Real Estate"/>
        </li>
      </ul>
    </>
  );
}
