import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllAccounts } from '../../store/slices/accountSlice';
import AccountModal from '../AccountModal/accountModal';

const AccountTable = () => {
    const allAccounts = useSelector(selectAllAccounts);

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

    const openUserModal = (param) => {
        return <AccountModal account={param} />;
    };

    return (
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
                            <tr key={account.UserID}>
                                <td>
                                    <img
                                        src={require(`../../assets/images/avatars/${account.UserID}.png`)}
                                        alt='https://bootdey.com/img/Content/avatar/avatar1.png'
                                    />
                                    <Link
                                        style={{
                                            textDecoration: 'none',
                                        }}
                                        to='#'
                                        className='user-link'
                                        data-bs-toggle='modal'
                                        data-bs-target='#exampleModal'
                                    >
                                        {openUserModal(account)}
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
                                        data-bs-toggle='modal'
                                        data-bs-target='#exampleModal'
                                    >
                                        {openUserModal(account)}
                                        <span className='fa-stack'>
                                            <i className='fa fa-square fa-stack-2x'></i>
                                            <i className='fa fa-info fa-stack-1x fa-inverse'></i>
                                        </span>
                                    </Link>
                                    <Link to='#' className='table-link'>
                                        <span className='fa-stack'>
                                            <i className='fa fa-square fa-stack-2x'></i>
                                            <i className='fa fa-unlock fa-stack-1x fa-inverse'></i>
                                        </span>
                                    </Link>
                                    <Link to='#' className='table-link danger'>
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
    );
};

export default AccountTable;
