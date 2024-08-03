import React from 'react';
import LoginForm from '../molecules/LoginForm';

const LoginSection: React.FC = () => {
    return (
        <div>
            <h2 className="mb-9 text-2xl font-bold text-black lg:text-title-xl2">
                Sign In
            </h2>

            <LoginForm />
        </div>
    );
};

export default LoginSection;
