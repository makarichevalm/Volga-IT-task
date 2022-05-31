import React from 'react';
import './FinallyPage.css';
import Header from '../../components/Header/Header';
import Progress from '../../components/ProgressLine/ProgressLine';
import Button from '../../components/ButtonBlue/ButtonBlue';
import img from '../../img/exit.svg';
import photo from '../../img/gift.png';
const FinallyPage = () => {
    return (
        <div>
            <Header img={img} height="58px" />
            <Progress value="375px" />
            <div className="all">
                <div className="img1">
                    <img src={photo} />
                </div>
                <div className="text1">
                    We've found some awesome <br /> frames for you!
                </div>
                <div className="text2">
                    Send the results to your email to receive <br /> special
                    discounts.
                </div>
                <Button text="Send" />
                <div className="text3">
                    By clicking ‘Send’ you agree to our Terms of Use & <br />{' '}
                    Privacy Policy and receiving promotion emails
                </div>
            </div>
        </div>
    );
};

export default FinallyPage;
