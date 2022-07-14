import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectAllAccounts,
    selectStatus,
    selectErrorMessage,
    fetchAccounts,
} from '../../store/slices/accountSlice';
import AccountTable from '../AccountTable/accountTable';

const AccountManager = () => {
    const dispatch = useDispatch();

    const allAccounts = useSelector(selectAllAccounts);
    const status = useSelector(selectStatus);
    const errorMessage = useSelector(selectErrorMessage);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAccounts());
        }
    }, [status, dispatch]);

    return (
        <div className='account-list'>
            {allAccounts.length > 0 ? (
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='main-box clearfix'>
                                <AccountTable accounts={allAccounts} />
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

export default AccountManager;
