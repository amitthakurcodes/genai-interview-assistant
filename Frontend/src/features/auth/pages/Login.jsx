import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import "../auth.form.scss"

const Login = () => {

    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin({ email, password })
        navigate("/")
    }

    if (loading) {
        return <div className="loading">Loading...</div>
    }

    return (
        <main className="auth-page">
            <div className="form-container">

                <h1 className="title">Login</h1>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label>Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="input-group password-box">
                        <label>Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                        />
                        <span onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? "🙈" : "👁️"}
                        </span>
                    </div>

                    <button className="primary-btn">Login</button>

                </form>

                <p className="switch-text">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>

            </div>
        </main>
    )
}

export default Login