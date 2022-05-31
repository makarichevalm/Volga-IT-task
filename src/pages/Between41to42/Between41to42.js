import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import Progress from '../../components/ProgressLine/ProgressLine';
import Img from '../../img/like23.png';
import './Between41to42.css';
const Between41to42 = () => {
    return (
        <div>
            <PageHeader num="4/10" />
            <Progress value="155px" />
            <div className="all">
                <div className="Like">
                    <img src={Img} />
                </div>
                <div className="text">No worries, we’ve got you!</div>
            </div>
        </div>
    );
};

export default Between41to42;
