export const CurrencyConverter = (rawPrice) => {
    let number = parseInt(rawPrice, 10);
    let price = new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(number);
    return price;
};
