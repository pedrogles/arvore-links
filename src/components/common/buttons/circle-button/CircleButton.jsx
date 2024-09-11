import { redirect } from "../../../../utils/redirect";

export function CircleButton({ icon, href, arialLabel }) {
  const handleClickButton = () => {
    redirect(href);
  };
  return (
    <button 
      className="flex text-xl text-black border rounded-full border-black bg-white p-3 duration-500 hover:bg-gray-800 hover:text-white md:text-2xl md:p-4 lg:text-3xl" 
      onClick={handleClickButton}
      aria-label={arialLabel}>
        {icon}
    </button>
  );
};
