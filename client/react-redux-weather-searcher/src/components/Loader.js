import React from 'react';
import '../containers/App.css';

const Loader = () => (
    <div className="Loader">
        <h1>Подождите, данные загружаются</h1>
        <div className="Spinner">
        </div>
    </div>
);

export default Loader;