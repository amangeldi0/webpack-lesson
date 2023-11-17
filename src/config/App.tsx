import {Link, Outlet} from "react-router-dom";
import {Counter} from "@/components/counter";
import {Test} from "@/components/test";
export const App = () => {

    return (
        <div>
            <h1>Webpack</h1>
            <div>
                <Link to='/shop'>Shopss</Link>
                <br/>
                <Link to='/about'>About</Link>
            </div>
            <div>
                <Outlet />
            </div>
            <Counter />
            <Test />
        </div>
    );
};
