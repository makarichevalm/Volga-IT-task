import React from 'react';
import Header from '../../components/Header/Header';
import '../MainPage/MainPage.css';
import photo from '../../img/firstpage.png';
import key from '../../img/arrow_right.png';
import Button from '../../components/ButtonBlue/ButtonBlue';
const MainPage = () => {
    return (
        <div>
            <Header img={key} height="66px" />
            <div className="all">
                <div className="img1">
                    <img src={photo} />
                </div>
                <div className="text1">Let’s find your perfect pair!</div>
                <div className="text2">
                    Take the quiz to easily discover your <br /> perfect fit
                    from thousands of styles
                </div>
                <Button text="Start Now" />
                <div className="ots"></div>
            </div>
        </div>
    );
};

export default MainPage;
