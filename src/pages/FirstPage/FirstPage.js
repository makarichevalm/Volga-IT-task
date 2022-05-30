import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import Progress from '../../components/ProgressLine/ProgressLine';
import '../FirstPage/FirstPage.css';
import Card138 from '../../components/Card138/Card138';
import men from '../../img/men_style.png';
import women from '../../img/women_style.png';

const FirstPage = () => {
    return (
        <div>
            <PageHeader num="1/10" />
            <Progress />
            <div className="all">
                <div className="quest">You are looking for</div>
                <Card138
                    information="Women's Styles"
                    img={women}
                    height="43px"
                    width="42px"
                />
                <Card138
                    information="Men's Styles"
                    img={men}
                    height="43px"
                    width="44px"
                />
                <div className="last_t">I'd like to see both</div>
            </div>
        </div>
    );
};

export default FirstPage;
