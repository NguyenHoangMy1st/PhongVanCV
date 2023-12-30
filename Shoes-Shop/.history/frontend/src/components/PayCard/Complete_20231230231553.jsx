import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/index.js';

export default function Complete() {
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div>
            <h1 className="complete-title">
                <Link to="/" onClick={handleReload}>
                    All steps completed - you are finished!!! GO HOME
                </Link>
            </h1>
            <div className="complete-content">
                <Link to="/" onClick={handleReload}>
                    <img src={img.complete} alt="complete"></img>
                </Link>
            </div>
        </div>
    );
}
