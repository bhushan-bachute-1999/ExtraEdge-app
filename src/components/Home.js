import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { UserInfo } from './'
import { addUser, toggleLoading } from '../actions';
import { Outlet } from 'react-router-dom';
import Loader from './loader';


function Home() {
    const user = useSelector(state => state);
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const fetchUser = async () => {
            //
            const response = await fetch(url);
            const data = await response.json();

            // console.log('Data', data);
            dispatch(toggleLoading());
            dispatch(addUser(data));

        }
        fetchUser();

    }, []);



    // console.log('User', user.userReducer.users);
    if (state.userReducer.isLoading) {
        return <Loader />;
    }
    return (
        <div className='Home'>
            <Outlet></Outlet>
            {user.userReducer.users && user.userReducer.users.map((user) => {
                return <UserInfo key={user.id} user={user} />
            })}
        </div>
    );
}

export default Home;
