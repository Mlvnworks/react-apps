import React, { useEffect } from 'react';

const ChildComponent = ({ comment }) => {
    useEffect(() => {
        console.log(comment());
    });

    return <div>ChildComponent</div>;
};

export default ChildComponent;
