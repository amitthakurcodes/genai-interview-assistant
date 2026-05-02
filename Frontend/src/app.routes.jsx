import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Protected from "./features/auth/components/Protected";
import Home from "./features/interview/pages/Home";
import Interview from "./features/interview/pages/Interview";
import Navbar from "./components/Navbar";  // ✅ import

// ✅ Layout wrapper - Navbar + page
const Layout = ({ children }) => (
    <>
        <Navbar />
        {children}
    </>
)

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />   // Login pe Navbar nahi chahiye
    },
    {
        path: "/register",
        element: <Register />  // Register pe bhi nahi
    },
    {
        path: "/",
        element: (
            <Protected>
                <Layout>
                    <Home />
                </Layout>
            </Protected>
        )
    },
    {
        path: "/interview/:interviewId",
        element: (
            <Protected>
                <Layout>
                    <Interview />
                </Layout>
            </Protected>
        )
    }
])