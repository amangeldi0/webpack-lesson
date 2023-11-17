import {useState} from "react";
import cls from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import Image from '@/assets/d9afacec468be11fab65fcc3bdd90922.jpg'
import TestSvg from '@/assets/test.svg'
export const App = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <Link to='/shop'>Shopss</Link>
            <br/>
            <Link to='/about'>About</Link>
            <br/>
            {counter}
            <button data-testid="button" className={cls.button} onClick={() => setCounter(prevState => prevState += 1)}>inc</button>
            <button data-testid="button"  className={cls.button} onClick={() => setCounter(prevState => prevState -= 1)}>dec</button>
            <Outlet />

            <div data-testid="platform" >
                {__PLATFORM__}
                <img src={Image} alt=""/>
                <TestSvg className={cls.icon} height={500} width={500} />
            </div>
        </div>
    );
};
