import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../store/slices/userSlice';

const Account = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <div className='account'>
            <div className='row'>
                <div className='col-4'>
                    <div className='list-group text-center'>
                        <Link to='/products' className='list-group-item'>
                            <p>Quản lý sản phẩm</p>
                        </Link>
                        <Link to='/categories' className='list-group-item'>
                            <p>Quản lý danh mục</p>
                        </Link>
                        <Link to='/accounts' className='list-group-item'>
                            <p>Quản lý người dùng</p>
                        </Link>
                    </div>
                </div>
                <div className='col-8'>
                    <h2>
                        {users &&
                            users.map((user, i) => (
                                <h1 key={i}>{user.Name}</h1>
                            ))}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Account;
