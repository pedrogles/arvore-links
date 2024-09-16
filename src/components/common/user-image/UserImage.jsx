export function UserImage({ src, alt }) {
    return (
        <img className="w-full h-full max-w-32 max-h-32 rounded-full shadow-md md:max-w-44 md:max-h-44" 
            src={src} 
            alt={alt} 
        />
    )
}