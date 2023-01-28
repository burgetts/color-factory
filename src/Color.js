import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import './Color.css';

const Color = ({colors}) => {
    const { color } = useParams()
    const ourColor = colors.filter(c => c.name === color)
  
    if (!ourColor[0]){
        return (
            <Navigate to='/colors'></Navigate>
        )
    }

    const {name, colorValue} = ourColor[0]
    return (
        <div className="Color" style={{backgroundColor: colorValue}}>
            <p>THIS IS {name.toUpperCase()} </p>
            <p>ISN'T IT NICE? </p>
            <p> <Link to='/colors'>GO BACK</Link></p>
        </div>
    )
}

export default Color;