import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import { useCallback, useState, useRef, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from '~/features/Form/Component/Form';
import FormGroup from '~/component/FormGroup';
import Button from '~/component/Button';
import Validation from '~/features/Form/Component/Validation';
import { signInApi } from '~/featureRedux/MiddleWare/Authen';
import { TranData } from '~/features/FeatureModel/FeatureModel';
import { resetPassWordApi } from '~/featureRedux/MiddleWare/Authen';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function Account() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.Authentication.user);
    const { handleReloadBreadCrumb } = useContext(TranData);
    const formRef = useRef();
    const [valueEmail, setValueEmail] = useState('');
    const [valuePassWord, setValuePassWord] = useState('');
    const [messagesEmail, setMessagesEmail] = useState('');
    const [messagesPassword, setMessagesPassword] = useState('');
    const [display, setDisplay] = useState(true);
    const [messageCheckEmail, setMessagesCheckEmail] = useState('');

    useEffect(() => {
        if (user) {
            handleReloadBreadCrumb('Trang khach hang');
            const getProducts = async () => {};
            getProducts();
        } else {
            handleReloadBreadCrumb('Đăng nhập tài khoản');
        }
    }, [user]);

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

    // handle passWord
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

    // submit
    const handleSubmitForm = async () => {
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
            await dispatch(signInApi(formSignIn)).then((res) => {
                if (res) {
                    setMessagesCheckEmail(res);
                } else {
                    setValueEmail('');
                    setValuePassWord('');
                    setMessagesCheckEmail('');
                }
            });
        }
    };

    const handleSendMail = (e) => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        e.preventDefault();

        console.log('render phuc digital');
        if (regex.test(valueEmail)) {
            dispatch(resetPassWordApi(valueEmail)).then((res) => {
                if (res) {
                    setMessagesCheckEmail(res);
                    setDisplay(!display);
                    setValueEmail('');
                } else {
                    setMessagesCheckEmail('Vui long check email de doi mat khau');
                    setDisplay(!display);
                    setValueEmail('');
                }
            });
        }
    };

    const handlePassWordLose = (e) => {
        e.preventDefault();
        setDisplay(!display);
        setMessagesEmail('');
        setMessagesPassword('');
        setValueEmail('');
        setValuePassWord('');
        console.log(2);
    };

    return !user ? (
        <div className={cx('wrap-content')}>
            <h3 className={cx('title')}>ĐĂNG NHẬP TÀI KHOẢN</h3>
            {display ? (
                <div className={cx('wrap-form')}>
                    <h3>KHÁCH HÀNG ĐĂNG NHẬP</h3>
                    <p>Nếu bạn có một tài khoản, xin vui lòng đăng nhập</p>
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
                        <div className={cx('wrap-btn')}>
                            <Button primary className={cx('btn-signin')}>
                                Đăng nhập
                            </Button>
                            <Button primary className={cx('btn-signin')} onClick={handlePassWordLose}>
                                Quên mật khẩu
                            </Button>
                        </div>
                    </Form>
                    {messageCheckEmail && <p className={cx('message')}>{messageCheckEmail}</p>}
                </div>
            ) : (
                <div className={cx('wrap-form')}>
                    <h3>ĐẶT LẠI MẬT KHẨU</h3>
                    <p>Chúng tôi sẽ gửi cho bạn một email để kích hoạt việc đặt lại mật khẩu.</p>
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
                        <div className={cx('wrap-btn')}>
                            <Button primary className={cx('btn-signin')} onClick={handleSendMail}>
                                Gửi
                            </Button>
                            <Button primary className={cx('btn-signin')} onClick={handlePassWordLose}>
                                Huỷ
                            </Button>
                        </div>
                    </Form>
                </div>
            )}
        </div>
    ) : (
        <div className={cx('content')}>
            <div className="grid">
                <div className="col">
                    <div className="row">
                        <div className="col l-8">
                            <div className={cx('items-product')}>
                                <h3>Các đơn hàng đã đặt</h3>
                                <ul></ul>
                            </div>
                        </div>
                        <div className="col l-4">
                            <div className={cx('info-private')}>
                                <h2>Tài khoản của tôi: </h2>
                                <span>phuc nguyen digital</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
