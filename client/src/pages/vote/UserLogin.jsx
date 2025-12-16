import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
    const navigate = useNavigate()
    return (
        <div>UserLogin
            <p>id</p>
            <button>add fingerprint</button>
            <button onClick={() => navigate('/voting')}>submit</button>
        </div>
    )
}

export default UserLogin

