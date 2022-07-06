import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectAllAccounts,
    selectStatus,
    selectErrorMessage,
    fetchAccounts,
} from '../../store/slices/accountSlice';

const AccountList = () => {
    const dispatch = useDispatch();

    const allAccounts = useSelector(selectAllAccounts);
    const status = useSelector(selectStatus);
    const errorMessage = useSelector(selectErrorMessage);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAccounts());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        <p>'Loading...'</p>;
    } else if (status === 'failed') {
        <p>{errorMessage}</p>;
    }

    const isActive = (status) => {
        if (status) {
            return (
                <span className='badge rounded-pill bg-success '>
                    Đã kích hoạt
                </span>
            );
        } else {
            return (
                <span className='badge rounded-pill bg-warning text-dark'>
                    Tạm khoá
                </span>
            );
        }
    };

    return (
        <div className='account-list'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='main-box clearfix'>
                            <div className='table-responsive'>
                                <table className='table user-list'>
                                    <thead>
                                        <tr>
                                            <th>
                                                <span>Tên khách hàng</span>
                                            </th>
                                            <th>
                                                <span>Số điện thoại</span>
                                            </th>
                                            <th className='text-center'>
                                                <span>Trạng thái</span>
                                            </th>
                                            <th>
                                                <span>Email</span>
                                            </th>
                                            <th>&nbsp;</th>
                                        </tr>
                                    </thead> 
                                    <tbody>
                                        {allAccounts.map((account) => (
                                            <tr>
                                                <td>
                                                    <img
                                                        src={require(`../../assets/images/icons/logo.png`)}
                                                        alt='https://bootdey.com/img/Content/avatar/avatar1.png'
                                                    />
                                                    <Link
                                                        style={{
                                                            textDecoration:
                                                                'none',
                                                        }}
                                                        to='#'
                                                        className='user-link'
                                                    >
                                                        {account.Name}
                                                    </Link>
                                                    <span className='user-subhead'>
                                                        {account.Level}
                                                    </span>
                                                </td>
                                                <td>{account.PhoneNumber}</td>
                                                <td className='text-center'>
                                                    {isActive(account.IsActive)}
                                                </td>
                                                <td>
                                                    <Link
                                                        to='#'
                                                        style={{
                                                            textDecoration:
                                                                'none',
                                                        }}
                                                    >
                                                        {account.Email}
                                                    </Link>
                                                </td>
                                                <td style={{ width: '20%' }}>
                                                    <Link
                                                        to='#'
                                                        className='table-link'
                                                    >
                                                        <span className='fa-stack'>
                                                            <i className='fa fa-square fa-stack-2x'></i>
                                                            <i className='fa fa-search-plus fa-stack-1x fa-inverse'></i>
                                                        </span>
                                                    </Link>
                                                    <Link
                                                        to='#'
                                                        className='table-link'
                                                    >
                                                        <span className='fa-stack'>
                                                            <i className='fa fa-square fa-stack-2x'></i>
                                                            <i className='fa fa-unlock fa-stack-1x fa-inverse'></i>
                                                        </span>
                                                    </Link>
                                                    <Link
                                                        to='#'
                                                        className='table-link danger'
                                                    >
                                                        <span className='fa-stack'>
                                                            <i className='fa fa-square fa-stack-2x'></i>
                                                            <i className='fa fa-lock fa-stack-1x fa-inverse'></i>
                                                        </span>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountList;
