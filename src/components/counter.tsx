import cls from "@/config/App.module.scss";
import {useState} from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h4>{counter}</h4>
            <button data-testid="button" className={cls.button} onClick={() => setCounter(prevState => prevState += 1)}>inc</button>
            <button data-testid="button"  className={cls.button} onClick={() => setCounter(prevState => prevState -= 1)}>dec</button>
        </div>
    );
};