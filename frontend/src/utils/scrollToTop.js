import { useEffect, useHistory } from 'react';
import { useLocation, withRouter } from 'react-router-dom';

const ScrollToTop = () => {
    let location = useLocation();
    let history = useHistory();

    useEffect(() => {
        if (location.pathname !== history.pathname) {
            window.scroll({
                top: 0,
                behavior: 'smooth',
            });
        }
    });

    return;
};

export default withRouter(ScrollToTop);
