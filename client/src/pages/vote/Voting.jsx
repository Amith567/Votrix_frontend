import { useNavigate } from 'react-router-dom'

const Voting = () => {
    const navigate = useNavigate()
    return (
        <div>Voting

            <p>choose candidate</p>
            <button onClick={() => navigate('/voting/success')}>vote</button>
        </div>
    )
}

export default Voting