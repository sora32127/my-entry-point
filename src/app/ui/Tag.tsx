export default function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span className="bg-slate-500 text-white px-2 py-1 rounded-md mr-2">
            {children}
        </span>
    )
}