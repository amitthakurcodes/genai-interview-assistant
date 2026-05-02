import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api";
import { toast } from "react-toastify";

export const useAuth = () => {

    const context = useContext(AuthContext);
    const { user, setUser, loading, setLoading } = context;

    // ✅ Sirf initial auth check ke liye alag state
    const [authChecked, setAuthChecked] = useState(false)

    const handleLogin = async ({ email, password }) => {
        setLoading(true);
        try {
            const data = await login({ email, password });
            if (data?.user) {
                setUser(data.user);
                toast.success("Login successful 🚀");
            } else {
                setUser(null);
                toast.error("Invalid credentials ❌");
            }
        } catch (err) {
            setUser(null);
            toast.error(err?.response?.data?.message || "Login failed ❌");
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async ({ username, email, password }) => {
        setLoading(true);
        try {
            const data = await register({ username, email, password });
            if (data?.user) {
                setUser(data.user);
                toast.success("Account created 🎉");
            } else {
                setUser(null);
                toast.error("Registration failed ❌");
            }
        } catch (err) {
            setUser(null);
            toast.error(err?.response?.data?.message || "Signup failed ❌");
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        setLoading(true);
        try {
            await logout();
            setUser(null);
            toast.success("Logged out 👋");
        } catch (err) {
            toast.error("Logout failed ❌");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const getAndSetUser = async () => {
            try {
                const data = await getMe();
                setUser(data?.user || null);
            } catch (err) {
                setUser(null);
            } finally {
                setAuthChecked(true) // ✅ sirf ek baar - initial check ke baad
            }
        };
        getAndSetUser();
    }, []);

    return {
        user,
        loading: !authChecked, // ✅ sirf jab tak initial check nahi hua tab tak loading true
        authChecked,
        handleRegister,
        handleLogin,
        handleLogout
    };
};