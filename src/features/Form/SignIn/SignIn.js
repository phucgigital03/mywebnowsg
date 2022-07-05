import styles from './SignIn.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

import Model from '~/features/Model';
import Form from '~/features/Form/Component/Form';
import FormGroup from '~/component/FormGroup';
import Button from '~/component/Button';
import Validation from '~/features/Form/Component/Validation';

const cx = classNames.bind(styles);

function SignIn({ handleDisplaySignIn, handleSwitchModelForm }) {
    const [valueEmail, setValueEmail] = useState('');
    const [valuePassWord, setValuePassWord] = useState('');
    const [messagesEmail, setMessagesEmail] = useState('');
    const [messagesPassword, setMessagesPassword] = useState('');

    const handleDefaultDisplaySignIn = (event) => {
        event.stopPropagation();
    };

    const handleChangeEmail = (e) => {
        setValueEmail(e.target.value);
    };

    const handleBlurInputEmail = (event) => {
        const messages = Validation(valueEmail, event);
        setMessagesEmail(messages);
    };

    const handleFocusEmail = () => {
        setMessagesEmail('');
    };

    const handleChangePassWord = (e) => {
        setValuePassWord(e.target.value);
    };

    const handleBlurInputPassWord = (event) => {
        const messages = Validation(valuePassWord, event);
        setMessagesPassword(messages);
    };

    const handleFocusPassWord = () => {
        setMessagesPassword('');
    };

    const handleSubmitForm = () => {
        if (!messagesEmail && !messagesPassword) {
            const userSigIn = {
                valueEmail,
                valuePassWord,
            };
            console.log(userSigIn);
        }
    };

    return (
        <Model className={cx('position')}>
            <div className={cx('wrap-content')} onClick={handleDisplaySignIn}>
                <div className={cx('content')} onClick={handleDefaultDisplaySignIn}>
                    <h3 className={cx('title')}>Đăng nhập tài khoản</h3>
                    <Form>
                        <FormGroup
                            id={'email'}
                            name={'email'}
                            rules={'required|email'}
                            title={'Your email'}
                            placeholder={'Enter your email'}
                            messages={messagesEmail}
                            type={'email'}
                            value={valueEmail}
                            onChange={handleChangeEmail}
                            onFocus={handleFocusEmail}
                            onBlur={handleBlurInputEmail}
                        />
                        <FormGroup
                            id={'password'}
                            title={'Your password'}
                            name={'email'}
                            rules={'required|min:7'}
                            messages={messagesPassword}
                            placeholder={'Enter your password'}
                            type={'password'}
                            value={valuePassWord}
                            onFocus={handleFocusPassWord}
                            onChange={handleChangePassWord}
                            onBlur={handleBlurInputPassWord}
                        />
                    </Form>
                    <Button primary className={cx('btn-signin')} onClick={handleSubmitForm}>
                        Đăng nhập
                    </Button>
                    <p className={cx('switch-model')}>
                        Nếu bạn chưa có tài khoản, vui lòng đăng ký
                        <span className={cx('btn-switch')} onClick={handleSwitchModelForm}>
                            tại đây
                        </span>
                    </p>
                </div>
            </div>
        </Model>
    );
}

export default SignIn;
