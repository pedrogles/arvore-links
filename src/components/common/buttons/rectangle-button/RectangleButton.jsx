import { redirect } from "../../../../utils/redirect";

export function RectangleButton({ name, href, arialLabel }) {
  const handleClickButton = () => {
    redirect(href);
  };
  return (
    <button 
      className="w-4/5 max-w-sm bg-black text-white rounded-md text-lg font-light duration-500 py-5 cursor-pointer hover:bg-gray-800 md:text-xl md:py-6"
      onClick={handleClickButton}
      aria-label={arialLabel}>
        {name}
    </button>
  );
};
