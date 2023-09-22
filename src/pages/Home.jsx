import React from 'react'

const Home = ({users}) => {
    return (
        <div>Hoşgeldiniz Sayın {users?.email}</div>
    )
}
export default Home
