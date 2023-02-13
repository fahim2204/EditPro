export default function FilterRadioBox(props) {
  return (
    <>
      <input
        type="radio"
        id="hosting-small"
        name="hosting"
        value="hosting-small"
        className="hidden peer"
        required
      />
      <label
        for="hosting-small"
        className="inline-flex items-center justify-between w-30 p-5 text-gray-500  rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="block mx-auto">
          <div className="w-full text-lg font-semibold">{props.category}</div>
        </div>
      </label>
    </>
  );
}
