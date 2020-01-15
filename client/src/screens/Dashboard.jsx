import React from 'react'
import Header from '../components/shared/Header'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <Link className='new' to='/newword'>new word</Link>
            <Link className='new' to='/newpoem'>new poem</Link>
            <Header />
        </div>
    )
}

export default Dashboard