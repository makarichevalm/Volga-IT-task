import React from 'react';
import '../PageHeader/PageHeader.css';
import backKey from '../../img/back.svg';
import exitKey from '../../img/exit.svg';

const PageHeader = () => {
    return (
        <div className="header">
            <div className="back">
                <img src={backKey} />
            </div>
            <div className="num_page">1/10</div>
            <div className="exit">
                <img src={exitKey} />
            </div>
        </div>
    );
};

export default PageHeader;
