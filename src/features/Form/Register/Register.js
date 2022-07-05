import styles from './Register.module.scss';
import classNames from 'classnames/bind';

import Model from '~/features/Model';
import Form from '~/features/Form/Component/Form';
import FormGroup from '~/component/FormGroup';
import Button from '~/component/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Register({ handleDisplayRegister, handleSwitchModelForm }) {
    const [valueFirstName, setValueFirstName] = useState('');
    const [valueLastName, setValueLastName] = useState('');
    const [valueEmail, setValueEmail] = useState('');
    const [valuePassWord, setValuePassWord] = useState('');

    const handleDefaultDisplayRegister = (event) => {
        event.stopPropagation();
    };

    const handleChangeFirstName = (e) => {
        setValueFirstName(e.target.value);
    };

    const handleGetValueFirstName = () => {
        console.log(valueFirstName);
    };

    const handleChangeLastName = (e) => {
        setValueLastName(e.target.value);
    };

    const handleGetValueLastName = () => {
        console.log(valueLastName);
    };

    const handleChangeEmail = (e) => {
        setValueEmail(e.target.value);
    };

    const handleGetValueEmail = () => {
        console.log(valueEmail);
    };

    const handleChangePassWord = (e) => {
        setValuePassWord(e.target.value);
    };

    const handleGetValuePassWord = () => {
        console.log(valuePassWord);
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
                            onChange={handleChangeFirstName}
                            onBlur={handleGetValueFirstName}
                        />
                        <FormGroup
                            id={'lastname'}
                            name={'lastname'}
                            rules={'required'}
                            title={'Your lastname'}
                            placeholder={'Enter your lastname'}
                            type={'text'}
                            value={valueLastName}
                            onChange={handleChangeLastName}
                            onBlur={handleGetValueLastName}
                        />
                        <FormGroup
                            id={'email'}
                            title={'Your email'}
                            name={'email'}
                            rules={'required|email'}
                            placeholder={'Enter your email'}
                            type={'email'}
                            value={valueEmail}
                            onChange={handleChangeEmail}
                            onBlur={handleGetValueEmail}
                        />
                        <FormGroup
                            id={'password'}
                            name={'password'}
                            rules={'required|min:7'}
                            title={'Your password'}
                            placeholder={'Enter your password'}
                            type={'password'}
                            onChange={handleChangePassWord}
                            onBlur={handleGetValuePassWord}
                        />
                    </Form>
                    <Button primary className={cx('btn-register')}>
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
