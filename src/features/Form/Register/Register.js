import styles from './Register.module.scss';
import classNames from 'classnames/bind';

import Model from '~/features/Model';
import Form from '~/features/Form/Component';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

function Register() {
    return (
        <Model className={cx('position')}>
            <div className={cx('content')}>
                <h3 className={cx('title')}>Đăng nhập tài khoản</h3>
                <Form></Form>
                <Button primary medium>
                    Đăng nhập
                </Button>
            </div>
        </Model>
    );
}

export default Register;
