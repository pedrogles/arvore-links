export function Button({ name, href }) {
  const handleButton = () => {
    window.location.href = href;
  };
  return (
    <>
      <button 
        className="w-4/5 max-w-sm bg-black text-white rounded-md text-lg font-light mt-6 duration-500 py-5 cursor-pointer hover:bg-gray-800 md:text-xl md:py-6"
        onClick={handleButton}>
          {name}
      </button>
    </>
  );
};
