export function H3({ children, className }) {
    return(
        <h3 className={`${className} text-lg md:text-xl lg:text-2xl`}>
            {children}
        </h3>
    )
}