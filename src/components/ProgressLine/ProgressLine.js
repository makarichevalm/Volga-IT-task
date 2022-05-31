import React from 'react';
import '../ProgressLine/ProgressLine.css';

const ProgressLine = ({ value }) => {
    return (
        <div className="line">
            <div className="progress" style={{ width: value }}></div>
        </div>
    );
};

export default ProgressLine;
