import styles from './SignIn.module.scss';
import classNames from 'classnames/bind';
import { useCallback, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import Form from '~/features/Form/Component/Form';
import Model from '~/features/Model';
import FormGroup from '~/component/FormGroup';
import Button from '~/component/Button';
import Validation from '~/features/Form/Component/Validation';
import { signInApi } from '~/featureRedux/MiddleWare/Authen';

const cx = classNames.bind(styles);

function SignIn({ handleDisplaySignIn, handleSwitchModelForm }) {
    const dispatch = useDispatch();
    const formRef = useRef();
    const [valueEmail, setValueEmail] = useState('');
    const [valuePassWord, setValuePassWord] = useState('');
    const [messagesEmail, setMessagesEmail] = useState('');
    const [messagesPassword, setMessagesPassword] = useState('');
    const [errorMess, setErrorMess] = useState('');

    // no hidden model Signin
    const handleDefaultDisplaySignIn = useCallback((event) => {
        event.stopPropagation();
    }, []);

    // handle email
    const handleChangeEmail = (e) => {
        setValueEmail(e.target.value);
    };

    const handleBlurInputEmail = (event) => {
        const messages = Validation(valueEmail, event);
        setMessagesEmail(messages);
    };

    const handleFocusEmail = useCallback(() => {
        setMessagesEmail('');
    }, []);

    // handle password
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

    // handle submit
    const handleSubmitForm = () => {
        // error messages when onclick btn
        const arrinput = formRef.current.querySelectorAll('[name][rules]');
        const messages = Array.from(arrinput).reduce((totalmessages, input) => {
            const errorMess = Validation(input.value, { target: input });
            if (errorMess) {
                switch (input.name) {
                    case 'email':
                        setMessagesEmail(errorMess);
                        break;
                    case 'password':
                        setMessagesPassword(errorMess);
                        break;
                    default:
                        console.log('ko co type nao');
                }
            }
            totalmessages.push(errorMess);
            return totalmessages;
        }, []);

        // check dieu kien submit
        const isvali = messages.some((message) => message);
        if (!isvali) {
            const formSignIn = {
                email: valueEmail,
                password: valuePassWord,
            };

            dispatch(signInApi(formSignIn)).then((res) => {
                if (res) {
                    setErrorMess(res);
                } else {
                    setValueEmail('');
                    setValuePassWord('');
                    setErrorMess('');
                    handleDisplaySignIn();
                }
            });
        }
    };

    return (
        <Model className={cx('position')}>
            <div className={cx('wrap-content')} onClick={handleDisplaySignIn}>
                <div className={cx('content')} onClick={handleDefaultDisplaySignIn}>
                    <h3 className={cx('title')}>Đăng nhập tài khoản</h3>
                    <Form ref={formRef} handleSubmitForm={handleSubmitForm}>
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
                            name={'password'}
                            rules={'required|min:7'}
                            messages={messagesPassword}
                            placeholder={'Enter your password'}
                            type={'password'}
                            value={valuePassWord}
                            onFocus={handleFocusPassWord}
                            onChange={handleChangePassWord}
                            onBlur={handleBlurInputPassWord}
                        />
                        <Button primary className={cx('btn-signin')}>
                            Đăng nhập
                        </Button>
                    </Form>
                    {errorMess && <p className={cx('errorMess')}>{errorMess}</p>}
                    <p className={cx('switch-model')}>
                        Nếu bạn chưa có tài khoản, vui lòng đăng ký{' '}
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
