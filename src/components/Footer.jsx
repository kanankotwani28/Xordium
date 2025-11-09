export default function Footer() {
    return (
        <footer className="mt-12 py-8 text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>© {new Date().getFullYear()} VerifAI</div>
                <div className="opacity-70">Built with React + Tailwind</div>
            </div>
        </footer>
    );
}