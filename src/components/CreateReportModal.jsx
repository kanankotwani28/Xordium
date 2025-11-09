import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function CreateReportModal({ open, onClose, onSubmit }) {
    const [topic, setTopic] = useState("");
    const [details, setDetails] = useState("");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") onClose && onClose();
        }
        if (open) {
            document.addEventListener("keydown", onKey);
            // prevent background scroll
            document.body.style.overflow = "hidden";
                // trigger enter animation
                // small timeout lets the component mount before transitioning to visible
                setTimeout(() => setVisible(true), 10);
        }
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
                setVisible(false);
        };
    }, [open, onClose]);

    function handleSubmit(e) {
        e.preventDefault();
        const payload = { topic: topic.trim(), details: details.trim() };
        if (!payload.topic || !payload.details) {
            // simple inline validation
            return;
        }
        onSubmit && onSubmit(payload);
        // clear and close
        setTopic("");
        setDetails("");
        onClose && onClose();
    }

        if (!open) return null;

        const modalContent = (
            <div
                className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
                aria-modal="true"
                role="dialog"
            >
                {/* overlay (darker) */}
                <div
                    className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-200 ${
                        visible ? "opacity-100" : "opacity-0"
                    } z-[9998]`}
                    onClick={onClose}
                />

                {/* modal panel (centered) */}
                <div className="relative w-full max-w-2xl mx-auto z-[9999]">
                    <form
                        onSubmit={handleSubmit}
                        className={`relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] transform transition-all duration-200 ease-out ${
                                visible ? "opacity-100 scale-100 -translate-y-6" : "opacity-0 scale-95 translate-y-3"
                            }`}
                    >
                    {/* close button */}
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white/6 hover:bg-white/10 flex items-center justify-center border border-white/10 transition-transform hover:rotate-90"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-5 h-5 text-white"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <h3 className="text-lg font-medium text-white mb-2">Create new report</h3>
                    <p className="text-sm text-white/70 mb-4">Provide a short topic and paste the news details below.</p>

                    <div className="space-y-3">
                        <div>
                            <label className="block text-sm text-white/80 mb-1">Topic</label>
                            <input
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Short topic (e.g. Vaccine claim about X)"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-white/80 mb-1">News / Details</label>
                            <textarea
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                                rows={6}
                                className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Paste the news article, claim or evidence here..."
                                required
                            />
                        </div>

                        <div className="flex gap-3 justify-end">
                            <button
                                type="button"
                                onClick={onClose}
                                className="py-2 px-4 rounded-md border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="py-2 px-4 rounded-md bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white font-medium hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition"
                            >
                                Submit report
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

    // render into body to escape any parent stacking context
    if (typeof document !== "undefined") {
        return ReactDOM.createPortal(modalContent, document.body);
    }
    return null;
}
