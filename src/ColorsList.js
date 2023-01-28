import React from 'react';
import { Link } from 'react-router-dom';
import './ColorsList.css'

const ColorsList = ({colors}) => {
    return (
       <>
            <header className="ColorsList-header">
                <h1> Welcome to the color factory! </h1> 
                <h2> <Link to='/colors/new'> Add a Color</Link> </h2>
            </header>
            <div className="ColorsList-content">
                <p>Please select a color.</p>
                <ul>
                    {colors.map(color => 
                        <li key={color.name}> 
                            <Link to={color.name}>{color.name}</Link>
                        </li>
                    )}
                </ul>
            </div>
       </>
    )
}

export default ColorsList;