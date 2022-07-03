import { bindActionCreators } from 'redux';

import * as product from '../screens/AllProducts/actions';

export default function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            ...product,
        },
        dispatch
    );
}
