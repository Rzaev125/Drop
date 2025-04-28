import HomeScreen from "../Components/HomeScreen/HomeScreen";
import Navbar from "../Components/Navbar/Navbar";
import style from './Home.module.css';

function Home() {
    return (
        <div className={style.homePage}>
            <Navbar />
            <HomeScreen />
        </div>
    );
}

export default Home;