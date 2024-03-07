import { useRef, SyntheticEvent, useState } from 'react';
import './Temperature.css';

export const Temperature = () => {
    const [error, setError] = useState<boolean>(false);
    const zipcodeInputRef = useRef<HTMLInputElement>(null);

    const getTemp = (zipcode: string) => {
        console.log(zipcode);
    };

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        const currentValue = zipcodeInputRef.current?.value || '';
        const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(currentValue);
        isValidZip ? (getTemp(currentValue), setError(false)) : setError(true);
    };

    return (
        <div className="page-container">
            <div className="title-container">
                <div className="title">Temperature</div>
            </div>
            <div className="body-container temp-body-container">
                {error ? (
                    <div className="body temp-body">Please enter a valid zipcode</div>
                ) : (
                    <div className="body temp-body">Check the temperature in your area!</div>
                )}
                <input
                    className="text-input"
                    id={error ? 'error' : ''}
                    type="text"
                    placeholder="Enter your zipcode!"
                    ref={zipcodeInputRef}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};
