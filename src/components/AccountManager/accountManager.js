import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectAllAccounts,
    selectStatusFetch,
    selectErrorFetch,
    fetchAccounts,
} from '../../store/slices/accountSlice';
import AccountTable from '../AccountTable/accountTable';

const AccountManager = (props) => {
    const dispatch = useDispatch();

    const allAccounts = useSelector(selectAllAccounts);
    const status = useSelector(selectStatusFetch);
    const errorMessage = useSelector(selectErrorFetch);

    const admin = props;

    useEffect(() => {
        if (!admin) {
            return (
                <Navigate
                    to={{
                        pathname: '/403',
                    }}
                />
            );
        }
        if (status === 'idle') {
            dispatch(fetchAccounts(admin.accessToken));
        }
    }, [status, admin, dispatch]);

    return (
        <div className='account-list'>
            {allAccounts.length > 0 ? (
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='main-box clearfix'>
                                <AccountTable {...{ allAccounts, admin }} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div style={{ color: 'red' }}>
                    No users found. Error: {errorMessage}
                </div>
            )}
        </div>
    );
};

export default AccountManager;
