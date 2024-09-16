export function H2({ children, className }) {
    return(
        <h2 className={`${className} text-xl md:text-2xl lg:text-[1.625rem]`}>
            {children}
        </h2>
    )
}