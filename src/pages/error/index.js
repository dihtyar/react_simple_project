import React from 'react';
import { Link } from 'react-router';

export default class ErrorPage  extends React.Component {
    render() {
        return (
            <div className='alert alert-danger'>
                <h3>Страница Не найдена</h3>
                <p>перейдите на <Link to='/'>Главную</Link></p>
            </div>
        );
    }
}
