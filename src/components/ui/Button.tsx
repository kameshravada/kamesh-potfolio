export default function Button({ children }: { children: React.ReactNode }) {
    return (
        <button className="bg-gradient-to-br from-primary to-primary text-black px-6 py-3 rounded-xl font-bold hover:scale-95 transition">
            {children}
        </button>
    );
}