import { useAuth } from '../features/auth/hooks/useAuth'
import { useNavigate } from 'react-router'

const Navbar = () => {
    const { user, handleLogout } = useAuth()
    const navigate = useNavigate()

    const onLogout = async () => {
        await handleLogout()
        navigate('/login')
    }

    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'nowrap',
            padding: '14px 32px',
            backgroundColor: '#0f1117',
            borderBottom: '1px solid #1e2330',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            {/* Logo */}
            <span
                onClick={() => navigate('/')}
                style={{ cursor: 'pointer', fontWeight: 700, fontSize: '1.1rem', color: '#fff', whiteSpace: 'nowrap' ,  marginLeft: '-20px' }}
            >
                🎯 <span style={{ color: '#e8356d' }}>PrepWise</span> AI
            </span>

            {/* Right Side */}
            {user && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
                    <span style={{ color: '#9ca3af', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                        👋 {user.username || user.email}
                    </span>
                    <button
                        onClick={onLogout}
                        style={{
                            padding: '8px 18px',
                            backgroundColor: 'transparent',
                            border: '1px solid #e8356d',
                            borderRadius: '8px',
                            color: '#e8356d',
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={e => {
                            e.target.style.backgroundColor = '#e8356d'
                            e.target.style.color = '#fff'
                        }}
                        onMouseLeave={e => {
                            e.target.style.backgroundColor = 'transparent'
                            e.target.style.color = '#e8356d'
                        }}
                    >
                        Logout
                    </button>
                </div>
            )}
        </nav>
    )
}

export default Navbar