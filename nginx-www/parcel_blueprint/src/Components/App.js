import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';

function App () {
    return (
        <>
            <span>Hello Diego</span>
        </>
    )
}

if (document.getElementById('react_root')) {
    ReactDOM.render(<App />, document.getElementById('react_root')); 
}