import { Navbar } from "../components/common";

export function PageLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center bg-slate-50">
                {children}
            </main>
        </>
    )
}