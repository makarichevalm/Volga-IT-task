import React from 'react';
import './TenPage.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import Progress from '../../components/ProgressLine/ProgressLine';
const TenPage = () => {
    return (
        <div>
            <PageHeader num="10/10" />
            <Progress value="365px" />
        </div>
    );
};

export default TenPage;
