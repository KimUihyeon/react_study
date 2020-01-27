import React from 'react';

interface CategoryProps {
    name : string,
}

export const Form = (props : CategoryProps) : React.FC => {
    return (
        <div>
            Category Form
        </div>
    )
}