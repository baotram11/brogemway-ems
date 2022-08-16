import React, { useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectAllAccounts, selectStatusFetch, selectErrorFetch, fetchAccounts } from '../../store/slices/accountSlice';
import { lockAccount, unlockAccount } from '../../store/slices/accountSlice';

import AccountModal from '../AccountModal/accountModal';

const ManagedUser = (props) => {
    const admin = props;
    const dispatch = useDispatch();

    const allAccounts = useSelector(selectAllAccounts);
    const status = useSelector(selectStatusFetch);
    const errorMessage = useSelector(selectErrorFetch);

    const lockUser = (event, param) => {
        console.log('LOCKED');
        const update = { accessToken: admin.accessToken, Account: param, Update: { IsActive: false } };
        console.log(update);
        dispatch(lockAccount(update));
        <Navigate to={{ pathname: '/' }} />;
    };
    const unlockUser = (event, param) => {
        console.log('UNLOCKED');
        const update = { accessToken: admin.accessToken, Account: param, Update: { IsActive: true } };
        console.log(update);
        dispatch(unlockAccount(update));
    };

    const [selectedUser, setSelectedUser] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const toggleTrueFalse = () => {
        setShowModal(handleShow);
    };

    const openUserModal = (account) => {
        setSelectedUser(account);
        toggleTrueFalse();
    };

    const info = {
        account: selectedUser,
        show: show,
        handleClose: handleClose,
    };
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAccounts(admin.accessToken));
        }
    }, [status, admin, dispatch]);

    useEffect(() => {
        console.log(allAccounts);
    }, [allAccounts]);

    return (
        <div className='managed-user'>
            {allAccounts.length > 0 ? (
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='main-box clearfix'>
                                <div className='account-table'>
                                    <div className='table-responsive'>
                                        <table className='table user-list'>
                                            <thead>
                                                <tr key={'row-title'}>
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
                                                    <tr key={account._id}>
                                                        <td>
                                                            <img
                                                                src={require(`../../assets/images/avatars/${account._id}.png`)}
                                                                alt='https://bootdey.com/img/Content/avatar/avatar1.png'
                                                            />
                                                            <Link
                                                                style={{
                                                                    textDecoration: 'none',
                                                                }}
                                                                to='#'
                                                                className='user-link'
                                                                onClick={() => openUserModal(account)}
                                                            >
                                                                {account.Name}
                                                            </Link>

                                                            <span className='user-subhead'>
                                                                {account.Level === 'bidder' ? (
                                                                    <p>Khách hàng</p>
                                                                ) : (
                                                                    <p>Quản lý</p>
                                                                )}
                                                            </span>
                                                        </td>
                                                        <td>{account.PhoneNumber}</td>
                                                        <td className='text-center'>
                                                            {account.IsActive ? (
                                                                <span className='badge rounded-pill bg-success '>
                                                                    Đã kích hoạt
                                                                </span>
                                                            ) : (
                                                                <span className='badge rounded-pill bg-warning text-dark'>
                                                                    Tạm khoá
                                                                </span>
                                                            )}
                                                        </td>
                                                        <td>
                                                            <Link
                                                                to='#'
                                                                style={{
                                                                    textDecoration: 'none',
                                                                }}
                                                            >
                                                                {account.Email}
                                                            </Link>
                                                        </td>
                                                        <td style={{ width: '20%' }}>
                                                            <Link
                                                                to='#'
                                                                className='table-link'
                                                                onClick={() => openUserModal(account)}
                                                            >
                                                                <span className='fa-stack'>
                                                                    <i className='fa fa-square fa-stack-2x'></i>
                                                                    <i className='fa fa-info fa-stack-1x fa-inverse'></i>
                                                                </span>
                                                            </Link>
                                                            <Link
                                                                to='#'
                                                                className='table-link'
                                                                onClick={(event) => unlockUser(event, account)}
                                                            >
                                                                <span className='fa-stack'>
                                                                    <i className='fa fa-square fa-stack-2x'></i>
                                                                    <i className='fa fa-unlock fa-stack-1x fa-inverse'></i>
                                                                </span>
                                                            </Link>
                                                            <Link
                                                                to='#'
                                                                className='table-link danger'
                                                                onClick={(event) => lockUser(event, account)}
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
                                    {show ? <AccountModal {...info} /> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div style={{ color: 'red' }}>No users found. Error: {errorMessage}</div>
            )}
        </div>
    );
};

export default ManagedUser;
