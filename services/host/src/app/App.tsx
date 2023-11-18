import {Link, Outlet} from "react-router-dom";

export const App = () => {

    return (
        <div>
            <h1>HOST</h1>
            <div>
                <Link to='/shop'>Shop</Link>
                <br/>
                <Link to='/admin'>Admin</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};
