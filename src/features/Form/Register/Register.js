import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import { useState, useRef } from 'react';

import Model from '~/features/Model';
import Form from '~/features/Form/Component/Form';
import FormGroup from '~/component/FormGroup';
import Button from '~/component/Button';
import Validation from '~/features/Form/Component/Validation';

const cx = classNames.bind(styles);

function Register({ handleDisplayRegister, handleSwitchModelForm }) {
    const formRef = useRef();
    const [firstname, setValueFirstName] = useState('');
    const [lastname, setValueLastName] = useState('');
    const [email, setValueEmail] = useState('');
    const [password, setValuePassWord] = useState('');
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
        const messages = Validation(firstname, event);
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
        const messages = Validation(firstname, event);
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
        const messages = Validation(email, event);
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
        const messages = Validation(password, event);
        setMessagesPWord(messages);
    };

    const handleFocusPassWord = () => {
        setMessagesPWord('');
    };

    // handle submit register
    const handleSubmit = (event) => {
        event.preventDefault();

        // error messages when onclick btn
        const arrinput = formRef.current.querySelectorAll('[name][rules]');
        const messages = Array.from(arrinput).reduce((totalmessages, input) => {
            const errorMess = Validation(input.value, { target: input });
            if (errorMess) {
                switch (input.name) {
                    case 'firstname':
                        setMessagesFName(errorMess);
                        break;
                    case 'lastname':
                        setMessagesLname(errorMess);
                        break;
                    case 'email':
                        setMessagesEmail(errorMess);
                        break;
                    case 'password':
                        setMessagesPWord(errorMess);
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
                firstname,
                lastname,
                email,
                password,
            };

            console.log(formSignIn);
        }
    };

    return (
        <Model className={cx('position')}>
            <div className={cx('wrap-content')} onClick={handleDisplayRegister}>
                <div className={cx('content')} onClick={handleDefaultDisplayRegister}>
                    <h3 className={cx('title')}>????ng k?? t??i kho???n</h3>
                    <Form ref={formRef}>
                        <FormGroup
                            id={'firstname'}
                            name={'firstname'}
                            rules={'required'}
                            title={'Your firstname'}
                            placeholder={'Enter your firstname'}
                            type={'text'}
                            value={firstname}
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
                            value={lastname}
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
                            value={email}
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
                        <Button primary className={cx('btn-register')} onClick={handleSubmit}>
                            ????ng k??
                        </Button>
                    </Form>
                    <p className={cx('switch-model')}>
                        N???u b???n c?? t??i kho???n, vui l??ng ????ng nh???p{' '}
                        <span className={cx('btn-switch')} onClick={handleSwitchModelForm}>
                            t???i ????y
                        </span>
                    </p>
                </div>
            </div>
        </Model>
    );
}

export default Register;
