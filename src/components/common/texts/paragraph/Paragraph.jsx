export function Paragraph({ children, className, ariaLabel  }) {
    return(
        <p className={`${className} text-base md:text-lg lg:text-xl`} aria-label={ariaLabel}>
            {children}
        </p>
    )
}