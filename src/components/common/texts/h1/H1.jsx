export function H1({ children, className }) {
    return(
        <h1 className={`${className} text-2xl md:text-3xl lg:text-4xl`}>
            {children}
        </h1>
    )
}