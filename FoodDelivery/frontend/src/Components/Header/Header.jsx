import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Delicious Meals Delivered to Your Doorstep!</h2>
                <p>Feeling hungry and looking for something delicious? Look no further! Whether you’re in the mood for a comforting classic, a spicy adventure, or a healthy bite, we’ve got a wide variety of cuisines that are sure to satisfy your cravings.</p>
                <button>View Menu</button>
            </div>
        </div>
    )
}

export default Header
