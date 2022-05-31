import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import MainPage from './pages/MainPage/MainPage';
import FirstPage from './pages/FirstPage/FirstPage';
import SecondPageM from './pages/SecondPageM/SecondPageM';
import SecondPageW from './pages/SecondPageW/SecondPageW';
import Between23 from './pages/Between2to3/Between2to3';
import ThirdPage1 from './pages/ThirdPage1/ThirdPage1';
import ThirdPage2 from './pages/ThirdPage2/ThirdPage2';
import FourthPage1 from './pages/FourthPage1/FourthPage1';
import Between4 from './pages/Between41to42/Between41to42';
import FourthPage2 from './pages/FourthPage2/FourthPage2';
import FifthPage1 from './pages/FifthEye/FifthEye';
import FifthPage2 from './pages/FifthSun/FifthSun';
import SixthPageM from './pages/SixMen/SixMen';
import SixthPageW from './pages/SixWomen/SixWomen';
import SixthPageB from './pages/SixBoth/SixBoth';
import SeventhPage from './pages/SevenPage/SevenPage';
import EighthPage from './pages/EightPage/EightPage';
import NinthPage from './pages/NinePage/NinePage';
import TenthPage from './pages/TenPage/TenPage';
import FinPage from './pages/FinallyPage/FinallyPage';
function App({ url }) {
    console.log(url);
    return (
        <div className="main">
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<MainPage />} />
                    <Route path="/first" exact element={<FirstPage />} />
                    <Route path="/secondm" exact element={<SecondPageM />} />
                    <Route path="/secondw" exact element={<SecondPageW />} />
                    <Route path="/betweenone" exact element={<Between23 />} />
                    <Route path="/thirdone" exact element={<ThirdPage1 />} />
                    <Route path="/thirdtwo" exact element={<ThirdPage2 />} />
                    <Route path="/fourthone" exact element={<FourthPage1 />} />
                    <Route path="/fourthtwo" exact element={<FourthPage2 />} />
                    <Route path="/betweentwo" exact element={<Between4 />} />
                    <Route path="/fiftheye" exact element={<FifthPage1 />} />
                    <Route path="/fifthsun" exact element={<FifthPage2 />} />
                    <Route path="/sixmen" exact element={<SixthPageM />} />
                    <Route path="/sixwomen" exact element={<SixthPageW />} />
                    <Route path="/sixboth" exact element={<SixthPageB />} />
                    <Route path="/seventh" exact element={<SeventhPage />} />
                    <Route path="/eighth" exact element={<EighthPage />} />
                    <Route path="/ninth" exact element={<NinthPage />} />
                    <Route path="/tenth" exact element={<TenthPage />} />
                    <Route path="/finally" exact element={<FinPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
