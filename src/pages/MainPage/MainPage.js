import React from 'react';
import Header from '../../components/Header/Header';
import '../MainPage/MainPage.css';
import photo from '../../img/firstpage.png';
import Button from '../../components/ButtonBlue/ButtonBlue';
const MainPage = () => {
    return (
        <div>
            <Header />
            <div className="all">
                <div className="img1">
                    <img src={photo} />
                </div>
                <div className="text1">Let’s find your perfect pair!</div>
                <div className="text2">
                    Take the quiz to easily discover your <br /> perfect fit
                    from thousands of styles
                </div>
                <Button />
            </div>
        </div>
    );
};

export default MainPage;
