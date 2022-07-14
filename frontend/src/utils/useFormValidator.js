import { useState } from 'react';
import {
    nameValidator,
    emailValidator,
    telephoneValidator,
    passwordValidator,
    confirmPasswordValidator,
    nameLoginValidator,
    passwordLoginValidator,
} from './validators';

const touchErrors = (errors) => {
    return Object.entries(errors).reduce((acc, [field, fieldError]) => {
        acc[field] = {
            ...fieldError,
            dirty: true,
        };
        return acc;
    }, {});
};

export const UseRegisterFormValidator = (form) => {
    const [errors, setErrors] = useState({
        name: {
            dirty: false,
            error: false,
            message: '',
        },
        email: {
            dirty: false,
            error: false,
            message: '',
        },
        telephone: {
            dirty: false,
            error: false,
            message: '',
        },
        password: {
            dirty: false,
            error: false,
            message: '',
        },
        confirmPassword: {
            dirty: false,
            error: false,
            message: '',
        },
    });
    const validateForm = ({ form, field, errors, forceTouchErrors = false }) => {
        let isValid = true;

        var nextErrors = JSON.parse(JSON.stringify(errors));

        if (forceTouchErrors) {
            nextErrors = touchErrors(errors);
        }

        const { name, email, telephone, password, confirmPassword } = form;

        if (nextErrors.name.dirty && (field ? field === 'name' : true)) {
            const nameMessage = nameValidator(name, form);
            nextErrors.name.error = !!nameMessage;
            nextErrors.name.message = nameMessage;
            if (!!nameMessage) isValid = false;
        }

        if (nextErrors.email.dirty && (field ? field === 'email' : true)) {
            const emailMessage = emailValidator(email, form);
            nextErrors.email.error = !!emailMessage;
            nextErrors.email.message = emailMessage;
            if (!!emailMessage) isValid = false;
        }

        if (nextErrors.telephone.dirty && (field ? field === 'telephone' : true)) {
            const telephoneMessage = telephoneValidator(telephone, form);
            nextErrors.telephone.error = !!telephoneMessage;
            nextErrors.telephone.message = telephoneMessage;
            if (!!telephoneMessage) isValid = false;
        }

        if (nextErrors.password.dirty && (field ? field === 'password' : true)) {
            const passwordMessage = passwordValidator(password, form);
            nextErrors.password.error = !!passwordMessage;
            nextErrors.password.message = passwordMessage;
            if (!!passwordMessage) isValid = false;
        }

        if (nextErrors.confirmPassword.dirty && (field ? field === 'confirmPassword' : true)) {
            const confirmPasswordMessage = confirmPasswordValidator(confirmPassword, form);
            nextErrors.confirmPassword.error = !!confirmPasswordMessage;
            nextErrors.confirmPassword.message = confirmPasswordMessage;
            if (!!confirmPasswordMessage) isValid = false;
        }

        setErrors(nextErrors);

        return {
            isValid,
            errors: nextErrors,
        };
    };

    const onBlurField = (e) => {
        const field = e.target.name;
        const fieldError = errors[field];
        if (fieldError.dirty) return;

        const updatedErrors = {
            ...errors,
            [field]: {
                ...errors[field],
                dirty: true,
            },
        };

        validateForm({ form, field, errors: updatedErrors });
    };

    return {
        validateForm,
        onBlurField,
        errors,
    };
};

export const UseLoginFormValidator = (form) => {
    const [errors, setErrors] = useState({
        username: {
            dirty: false,
            error: false,
            message: '',
        },
        password: {
            dirty: false,
            error: false,
            message: '',
        },
    });
    const validateForm = ({ form, field, errors, forceTouchErrors = false }) => {
        let isValid = true;

        var nextErrors = JSON.parse(JSON.stringify(errors));

        if (forceTouchErrors) {
            nextErrors = touchErrors(errors);
        }

        const { username, password } = form;

        if (nextErrors.username.dirty && (field ? field === 'username' : true)) {
            const usernameMessage = nameLoginValidator(username, form);
            nextErrors.username.error = !!usernameMessage;
            nextErrors.username.message = usernameMessage;
            if (!!usernameMessage) isValid = false;
        }

        if (nextErrors.password.dirty && (field ? field === 'password' : true)) {
            const passwordMessage = passwordLoginValidator(password, form);
            nextErrors.password.error = !!passwordMessage;
            nextErrors.password.message = passwordMessage;
            if (!!passwordMessage) isValid = false;
        }

        setErrors(nextErrors);

        return {
            isValid,
            errors: nextErrors,
        };
    };

    const onBlurField = (e) => {
        const field = e.target.name;
        const fieldError = errors[field];
        if (fieldError.dirty) return;

        const updatedErrors = {
            ...errors,
            [field]: {
                ...errors[field],
                dirty: true,
            },
        };

        validateForm({ form, field, errors: updatedErrors });
    };

    return {
        validateForm,
        onBlurField,
        errors,
    };
};
