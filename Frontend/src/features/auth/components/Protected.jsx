

import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import React from "react";

const Protected = ({ children }) => {

    const { loading, user } = useAuth();

    // 🔥 WAIT UNTIL AUTH CHECK DONE
    if (loading) {
        return (
            <main style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}>
                <h2>Loading...</h2>
            </main>
        );
    }

    // 🔥 NOT LOGGED IN
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // 🔥 LOGGED IN
    return children;
};

export default Protected;