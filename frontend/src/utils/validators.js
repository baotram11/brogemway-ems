export const nameValidator = (name) => {
    if (!name) {
        return 'Tên không được trống';
    }
    return '';
};

export const emailValidator = (email) => {
    if (!email) {
        return 'Địa chỉ email không được trống';
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
        return 'Cú pháp chưa đúng';
    }
    return '';
};

export const telephoneValidator = (tel) => {
    if (!tel) {
        return 'Số điện thoại không được trống';
    } else if (!(tel.length === 10)) {
        return 'Số điện thoại bao gồm 10 chữ số';
    }
    return '';
};

export const passwordValidator = (password) => {
    if (!password) {
        return 'Mật khẩu không được trống';
    } else if (password.length < 8) {
        return 'Mật khẩu phải có ít nhất 8 ký tự';
    }
    return '';
};

export const confirmPasswordValidator = (confirmPassword, form) => {
    if (!confirmPassword) {
        return 'Yêu cầu nhập lại mật khẩu';
    } else if (confirmPassword !== form.password) {
        return 'Mật khẩu chưa phù hợp';
    }
    return '';
};

export const nameLoginValidator = (username) => {
    if (!username) {
        return 'Nhập email hoặc số điện thoại';
    }
};

export const passwordLoginValidator = (password) => {
    if (!password) {
        return 'Nhập mật khẩu';
    } else if (password.length < 8) {
        return 'Mật khẩu phải có ít nhất 8 ký tự';
    }
};
