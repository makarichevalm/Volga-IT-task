import React from 'react';
import './EightPage.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import Progress from '../../components/ProgressLine/ProgressLine';
import Card from '../../components/CardGlasses/CardGlasses';
import gl1 from '../../img/glas1.png';
const EightPage = () => {
    return (
        <div>
            <PageHeader num="8/10" />
            <Progress value="295px" />
            <div className="all">
                <div className="quest">
                    Which frame style are you looking for?
                </div>
                <div className="last_t">You can pick more than one.</div>
                <div className="slider">
                    <Card img={gl1} text="Rectangle" />
                </div>
            </div>
        </div>
    );
};

export default EightPage;
