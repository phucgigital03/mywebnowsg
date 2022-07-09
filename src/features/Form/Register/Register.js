import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

import Model from '~/features/Model';
import Form from '~/features/Form/Component/Form';
import FormGroup from '~/component/FormGroup';
import Button from '~/component/Button';
import Validation from '~/features/Form/Component/Validation';

const cx = classNames.bind(styles);

function Register({ handleDisplayRegister, handleSwitchModelForm }) {
    const [valueFirstName, setValueFirstName] = useState('');
    const [valueLastName, setValueLastName] = useState('');
    const [valueEmail, setValueEmail] = useState('');
    const [valuePassWord, setValuePassWord] = useState('');
    const [messagesFirstName, setMessagesFName] = useState('');
    const [messagesLastName, setMessagesLname] = useState('');
    const [messagesPassword, setMessagesPWord] = useState('');
    const [messagesEmail, setMessagesEmail] = useState('');

    const handleDefaultDisplayRegister = (event) => {
        event.stopPropagation();
    };

    // handle firstname
    const handleChangeFirstName = (e) => {
        setValueFirstName(e.target.value);
    };

    const handleBlurFirstName = (event) => {
        const messages = Validation(valueFirstName, event);
        setMessagesFName(messages);
    };

    const handleFocusFirstName = () => {
        setMessagesFName('');
    };

    // handle lastname
    const handleChangeLastName = (e) => {
        setValueLastName(e.target.value);
    };

    const handleBlurLastName = (event) => {
        const messages = Validation(valueFirstName, event);
        setMessagesLname(messages);
    };

    const handleFocusLastName = () => {
        setMessagesLname('');
    };

    // handel email
    const handleChangeEmail = (e) => {
        setValueEmail(e.target.value);
    };

    const handleBlurEmail = (event) => {
        const messages = Validation(valueEmail, event);
        setMessagesEmail(messages);
    };

    const handleFocusEmail = () => {
        setMessagesEmail('');
    };

    // handle password
    const handleChangePassWord = (e) => {
        setValuePassWord(e.target.value);
    };

    const handleBlurPassWord = (event) => {
        const messages = Validation(valuePassWord, event);
        setMessagesPWord(messages);
    };

    const handleFocusPassWord = () => {
        setMessagesPWord('');
    };

    // handle submit register

    const handleSubmit = () => {
        if (!messagesEmail && !messagesFirstName && !messagesLastName && !messagesPassword) {
            const formRegister = {
                valueFirstName,
                valueLastName,
                valueEmail,
                valuePassWord,
            };
            console.log(formRegister);
        }
    };

    return (
        <Model className={cx('position')}>
            <div className={cx('wrap-content')} onClick={handleDisplayRegister}>
                <div className={cx('content')} onClick={handleDefaultDisplayRegister}>
                    <h3 className={cx('title')}>Đăng ký tài khoản</h3>
                    <Form>
                        <FormGroup
                            id={'firstname'}
                            name={'firstname'}
                            rules={'required'}
                            title={'Your firstname'}
                            placeholder={'Enter your firstname'}
                            type={'text'}
                            value={valueFirstName}
                            messages={messagesFirstName}
                            onFocus={handleFocusFirstName}
                            onChange={handleChangeFirstName}
                            onBlur={handleBlurFirstName}
                        />
                        <FormGroup
                            id={'lastname'}
                            name={'lastname'}
                            rules={'required'}
                            title={'Your lastname'}
                            placeholder={'Enter your lastname'}
                            type={'text'}
                            value={valueLastName}
                            messages={messagesLastName}
                            onFocus={handleFocusLastName}
                            onChange={handleChangeLastName}
                            onBlur={handleBlurLastName}
                        />
                        <FormGroup
                            id={'email'}
                            title={'Your email'}
                            name={'email'}
                            rules={'required|email'}
                            placeholder={'Enter your email'}
                            type={'email'}
                            value={valueEmail}
                            messages={messagesEmail}
                            onFocus={handleFocusEmail}
                            onChange={handleChangeEmail}
                            onBlur={handleBlurEmail}
                        />
                        <FormGroup
                            id={'password'}
                            name={'password'}
                            rules={'required|min:7'}
                            title={'Your password'}
                            placeholder={'Enter your password'}
                            type={'password'}
                            messages={messagesPassword}
                            onFocus={handleFocusPassWord}
                            onChange={handleChangePassWord}
                            onBlur={handleBlurPassWord}
                        />
                    </Form>
                    <Button primary className={cx('btn-register')} onClick={handleSubmit}>
                        Đăng ký
                    </Button>
                    <p className={cx('switch-model')}>
                        Nếu bạn có tài khoản, vui lòng đăng nhập{' '}
                        <span className={cx('btn-switch')} onClick={handleSwitchModelForm}>
                            tại đây
                        </span>
                    </p>
                </div>
            </div>
        </Model>
    );
}

export default Register;
