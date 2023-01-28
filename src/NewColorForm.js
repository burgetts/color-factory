import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewColorsForm.css';

const NewColorForm = ({addColor}) => {
    const navigate = useNavigate()
    const INITIAL_STATE = {
        name: '',
        value: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addColor(formData)
        navigate('/colors')
    }
    return (
        <div className="NewColorForm">
            <div className="NewColorForm-form-container">
                <form className="NewColorForm-form">
                    <label htmlFor="name">Color Name
                    <input type="text" name="name" value={formData.name} onChange={handleChange} ></input>
                    </label>

                    <label htmlFor="value">Color Value
                    <input type="color" name="colorValue" value={formData.colorValue} onChange={handleChange}></input>
                    </label>
                    <button onClick={handleSubmit}>Add a color</button>
            </form>
            </div>
        </div>
    )
}

export default NewColorForm;