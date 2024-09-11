export function SquareButton({ icon, onClick, ariaLabel }) {
    return (
        <button 
            className="bg-transparent cursor-pointer px-5 py-6 md:px-7 max-[190px]:px-2" 
            onClick={onClick}
            aria-label={ariaLabel}>
                {icon}
        </button>
    )
};