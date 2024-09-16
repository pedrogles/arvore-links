import { Navbar } from "../components/common";

export function PageLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="flex flex-col justify-center items-center gap-6 bg-slate-50 py-28 md:py-40 md:gap-8 lg:py-48">
                {children}
            </main>
        </>
    )
}