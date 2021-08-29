import React from 'react';

const Error = (props) => {
    const { msg } = props;
    return (
        <div>
            <h2>{msg}</h2>
        </div>
    )
}

export default Error;
