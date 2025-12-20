import { useNavigate } from 'react-router-dom'

const Voting = () => {
    const navigate = useNavigate()
    return (
        <>
            <button onClick={() => navigate('/voting/success')}>vote</button>
        </>
    )
}

export default Voting