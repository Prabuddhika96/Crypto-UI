function TabContentInput({
  inputText,
  setInputText,
  placeHolder,
  disable,
}: any) {
  // const [inputText, setInputText] = useState("");

  const handleInputChange = (event: any) => {
    const text = event.target.value;
    setInputText(text);
  };
  return (
    <div className="relative flex items-center w-full">
      <span className="absolute left-2 text-[#999]">{placeHolder}</span>
      <input
        type="text"
        className="w-full h-16 px-2 text-right bg-gray-300 rounded-l-lg"
        value={inputText}
        onChange={handleInputChange}
        disabled={disable}
      />
    </div>
  );
}

export default TabContentInput;
