// src/pages/dashboard/Dashboard.jsx
import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Header from "../../components/Dashboard/Header";
import StatCard from "../../components/Dashboard/StatCard";


export default function Dashboard() {
    return (
        <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-gray-10 to-black p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
                <Sidebar />

                <main className="space-y-6">
                    <Header title="Dashboard" />

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatCard title="Verified claims" value="1,243" delta={6}>
                            <div className="text-sm text-white-70">Confidence</div>
                        </StatCard>

                        <StatCard title="Pending reviews" value="54" delta={-2}>
                            <div className="text-sm text-white-70">Assigned</div>
                        </StatCard>

                        <StatCard title="Alerts today" value="12" delta={10}>
                            <div className="text-sm text-white-70">High priority</div>
                        </StatCard>
                    </section>

                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="rounded-lg bg-gray-20/60 border border-white-8 p-4">
                            <h3 className="text-white-100 font-medium">Recent activity</h3>
                            <p className="text-white-60 text-sm mt-2">Recent verification events, claim updates, and actions will appear here.</p>
                            <div className="mt-4 space-y-3 text-sm">
                                <div className="p-3 rounded-md bg-gray-10 border border-white-6">Claim <strong>#A173</strong> updated by <strong>Alex</strong></div>
                                <div className="p-3 rounded-md bg-gray-10 border border-white-6">New alert: <strong>Viral image</strong> flagged</div>
                                <div className="p-3 rounded-md bg-gray-10 border border-white-6">Policy updated for source <strong>LocalPost</strong></div>
                            </div>
                        </div>

                        <div className="rounded-lg bg-gray-20/60 border border-white-8 p-4">
                            <h3 className="text-white-100 font-medium">Quick actions</h3>
                            <div className="mt-4 flex flex-col gap-3">
                                <button className="py-2 rounded-md bg-accent-blue text-black font-medium">Create new verification</button>
                                <button className="py-2 rounded-md border border-white-8 text-white-70">Import sources</button>
                                <button className="py-2 rounded-md border border-white-8 text-white-70">Invite teammate</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
