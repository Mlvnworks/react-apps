import React, { forwardRef, useEffect, useImperativeHandle, useReducer, useRef, useState, useLayoutEffect } from 'react';

let color;

// color text inside the box
const BoxColorText = forwardRef((props, ref) => {
    const [appear, setAppear] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle: () => {
            setAppear(!appear);
        },
    }));

    return <p>{appear ? props.text : ''}</p>;
});

// ///////// reducer hook use to reset and do some stuff with box color ////////////
const reduce = (bg, { type }) => {
    switch (type) {
        case 'darken':
            return '#000';
        case 'reset':
            return '#ccc';
        case 'whiten':
            return 'white';
        case 'customized':
            return color;
        default:
            return bg;
    }
};

// ///////////////// Main App //////////////////////
const App = () => {
    const [bg, dispatch] = useReducer(reduce, '#ccc');
    const customBg = useRef(null);
    const showColorText = useRef(null);
    const [bgText, setBgText] = useState('');
    const [btnText, setBtnText] = useState(false);

    // submiting new input color
    const apllyCustomBg = e => {
        e.preventDefault();
        if (customBg.current.value === '') {
            //idf text field contains nothing it will auto focus
            customBg.current.focus();
        } else {
            color = customBg.current.value;
            dispatch({ type: 'customized' });
            customBg.current.value = '';
        }
    };

    // addv text color when page loaded
    useEffect(() => {
        setBgText(bg);
    }, [bg]);

    // style
    const box = {
        height: '200px',
        width: '200px',
        backgroundColor: bg,
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '3em',
        fontFamily: 'arial',
        fontWeigth: 'bold',
    };

    return (
        <>
            <form action='#' onSubmit={apllyCustomBg}>
                <input type='text' placeholder='change box color' ref={customBg} />
                <input type='submit' value='change' />
            </form>
            <button onClick={() => dispatch({ type: 'darken' })}>Darken</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'whiten' })}>Whiten</button>
            <button
                onClick={() => {
                    showColorText.current.alterToggle();
                    setBtnText(!btnText);
                }}>
                {btnText ? 'unShow ColorText' : 'show colortext'}
            </button>
            <div style={box}>
                <BoxColorText ref={showColorText} text={bgText} />
            </div>
        </>
    );
};

export default App;

// ////////////// Summary ///////////////
/*
    1. useState re render componnents when state change
    2.useEffect it will run when the page load and when certain state change
    3.useContext = provide accessible component data to easily access by the child component
    4.use
*/
