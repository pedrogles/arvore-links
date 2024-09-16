import { useCardContext } from '../../../../hooks/useCardContext';

export function CardImage() {
    const { project } = useCardContext();
    const { image, alt } = project;
    return (
        <img className="w-full object-cover border border-gray-800 rounded-ss-md rounded-se-md" 
            src={image} 
            alt={alt} 
        />
    );
};