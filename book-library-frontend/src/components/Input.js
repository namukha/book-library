import React, { useState } from 'react';

function Input({ type = 'text', label, defaultValue = "" }) {
    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className="input-container">
            <input type={type} defaultValue={defaultValue} onChange={handleChange} />
            <label className={defaultValue && 'filled' || value && 'filled'}>
                {label}
            </label>
        </div>
    );
}

export default Input;