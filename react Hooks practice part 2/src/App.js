import React, { useCallback, useEffect, useMemo, useState } from 'react';

// components
import ChildComponent from './ChildComponent';

const App = () => {
    const [showText, setShowText] = useState(false);
    const [greet, setGreet] = useState('Hell');

    const run = g => {
        console.log(g);
        return g;
    };

    const runChild = useCallback(() => {
        return greet;
    }, [greet]);

    const getText = useMemo(() => run(greet), [greet]);

    return (
        <>
            <button onClick={() => setShowText(!showText)}>re-Compute Grade</button>
            <p>{showText ? 'Hello' : ''}</p>
            <h1>Heighest Honor:{getText}</h1>
            <ChildComponent comment={runChild} />
        </>
    );
};

export default App;
