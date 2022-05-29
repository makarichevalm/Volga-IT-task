import React from 'react';
import '../ProgressLine/ProgressLine.css';

const ProgressLine = ({ value }) => {
    return (
        <div className="line">
            <div className="progress"></div> {/*style = {value} */}
        </div>
    );
};

export default ProgressLine;
