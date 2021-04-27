import { useState } from "react";

// creating custom hook for binding input elements 
export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    return {
        value,
        setValue,
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value);
            }
        }
    };
};