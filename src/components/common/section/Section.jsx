export function Section({ children, gap }) {
    return (
        <section className={`w-4/5 max-w-sm flex flex-col items-center ${gap}`}>
            {children}
        </section>
    )
}