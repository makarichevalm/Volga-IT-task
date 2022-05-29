import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import Progress from '../../components/ProgressLine/ProgressLine';
import '../FirstPage/FirstPage.css';
import Card138 from '../../components/Card138/Card138';
const FirstPage = () => {
    return (
        <div>
            <PageHeader />
            <Progress />
            <div className="all">
                <div className="quest">You are looking for</div>
                <Card138 />
                <Card138 />
                <div className="last_t">I'd like to see both</div>
            </div>
        </div>
    );
};

export default FirstPage;
