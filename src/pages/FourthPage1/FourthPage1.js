import React from 'react';
import './FourthPage1.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import Progress from '../../components/ProgressLine/ProgressLine';
import CardText from '../../components/CardText2/CardText2';
import img from '../../img/sizes.png';
const FourthPage1 = () => {
    return (
        <div>
            <PageHeader num="4/10" />
            <Progress value="155px" />
            <div className="all">
                <div className="quest">
                    What’s your current <br /> frame size?
                </div>
                <div className="image">
                    <img src={img} />
                </div>
                <div className="styleCard">
                    <CardText
                        text="Small "
                        size="42-48 mm"
                        height="54px"
                        width="316px"
                    />
                </div>
                <div className="ots"></div>
                <div className="styleCard">
                    <CardText
                        text="Medium "
                        size="49-53 mm"
                        height="52px"
                        width="316px"
                    />
                </div>
                <div className="ots"></div>
                <div className="styleCard">
                    <CardText
                        text="Large"
                        size="54-58 mm"
                        height="54px"
                        width="316px"
                    />
                </div>
                <div className="last_t">I don’t know</div>
            </div>
        </div>
    );
};

export default FourthPage1;
