import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrencyConverter } from '../../utils/currencyConverter';
const orderList = [
    {
        _id: '62bbcced79dd1e4cb5b73b8b',
        ProID: '4',
        ProName: 'APPLE iPhone XR 128GB ',
        Price: '17000000',
        Quantity: 2,
    },

    {
        _id: '62bbcced79dd1e4cb5b73b9c',
        ProID: '21',
        ProName: 'ASUS ZenBook UX363EA-HP532T',
        Price: '28999000',
        Quantity: 1,
    },

    {
        _id: '62bbcced79dd1e4cb5b73ba5',
        ProID: '30',
        ProName: 'ALEXANDER MCQUEEN Dove Lace Print Shirt',
        Price: '11853960',
        Quantity: 1,
    },

    {
        _id: '62bbcced79dd1e4cb5b73bac',
        ProID: '37',
        ProName: 'THOM BROWNE Camel Bear&Salmon Trouser',
        Price: '22060772',
        Quantity: 1,
    },

    {
        _id: '62bbcced79dd1e4cb5b73bb5',
        ProID: '46',
        ProName: 'LOUIS VUITTON Mini Eclipse Canvas',
        Price: '58233914',
        Quantity: 1,
    },

    {
        _id: '62bbcced79dd1e4cb5b73bbf',
        ProID: '56',
        ProName: 'THOM BROWNE Tech Runner Sneakers',
        Price: '14389200',
        Quantity: 1,
    },

    {
        _id: '62bbcced79dd1e4cb5b73bcd',
        ProID: '70',
        ProName: 'ASH Addict Fur',
        Price: '6734850',
        Quantity: 1,
    },

    {
        _id: '62bbcced79dd1e4cb5b73bdc',
        ProID: '85',
        ProName: 'MASTRO ZAVATTI Dark Brown Cap Toe Oxford',
        Price: '5822988',
        Quantity: 1,
    },
];
const CartDetail = () => {
    const [subtotal, setSubTotal] = useState(0);
    useEffect(() => {
        console.log(orderList);
        var temp = 0;
        if (orderList) {
            for (let i = 0; i < orderList.length; i++) {
                temp += parseInt(orderList[i].Price) * orderList[i].Quantity;
            }
        }
        setSubTotal(temp);
    }, []);

    return (
        <section className='cart_area section-padding40'>
            <div className='container'>
                <div className='cart_inner'>
                    <div className='table-responsive'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>Sản phẩm</th>
                                    <th scope='col'>Giá tiền</th>
                                    <th scope='col'>Số lượng</th>
                                    <th scope='col'>Tổng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderList.map((product) => (
                                    <tr key={product._id}>
                                        <td>
                                            <div className='media'>
                                                <div className='d-flex'>
                                                    <img
                                                        className='img-fluid'
                                                        src={require(`../../assets/images/products/${product.ProID}/1.png`)}
                                                        alt='...'
                                                        width={'200px'}
                                                        height={'auto'}
                                                    />
                                                    <Link
                                                        key={product.ProID}
                                                        className='link'
                                                        to={`/products/${product.ProID}`}
                                                        style={{
                                                            textDecoration: 'none',
                                                            color: '#1d2547',
                                                            fontSize: '16px',
                                                            fontWeight: 'bold',
                                                            paddingTop: '42px',
                                                            paddingLeft: '50px',
                                                        }}
                                                    >
                                                        {product.ProName}
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>{CurrencyConverter(product.Price)}</h5>
                                        </td>
                                        <td>
                                            <div className='product_count'>
                                                <h5>{product.Quantity}</h5>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>{CurrencyConverter(parseInt(product.Price, 10) * product.Quantity)}</h5>
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <h5>Tạm tính</h5>
                                    </td>
                                    <td>
                                        <h5 style={{ color: 'rgba(255, 53, 53, 1)', fontWeight: 'bold' }}>
                                            {CurrencyConverter(subtotal)}
                                        </h5>
                                    </td>
                                </tr>
                                <tr className='shipping_area'>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <h5>Phí giao hàng</h5>
                                    </td>
                                    <td>
                                        <div className='shipping_box'>
                                            <ul className='list'>
                                                <li>
                                                    Tiêu chuẩn: {CurrencyConverter(116000)}
                                                    <input
                                                        type='radio'
                                                    />
                                                </li>
                                                <li>
                                                    Tiết kiệm: {CurrencyConverter(55000)}
                                                    <input
                                                        type='radio'
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='checkout_btn_inner' style={{ float: 'right' }}>
                            <span style={{ paddingRight: '10px' }}>
                                <Link className='link btn' to='/products' style={{ width: '300px' }}>
                                    Tiếp tục mua sắm
                                </Link>
                            </span>
                            <span>
                                <Link className='link btn checkout_btn' to='/checkout' style={{ width: '300px' }}>
                                    Tiến hành thanh toán
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartDetail;
