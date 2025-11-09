import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
    const { user, initializing } = useAuth();

    if (initializing) {
        // You can return a loader/spinner here if you want
        return null;
    }

    if (!user) {
        return <Navigate to="/auth" replace />;
    }

    return children;
}
