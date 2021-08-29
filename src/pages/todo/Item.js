import React, {Fragment, useState} from 'react';
import '../../style/pages/todo/item.scss';

const Item = () => {
    return (
        <Fragment>
            <div className="todo">
                <li className="todo-item"> sdsd</li>
                <button className="complete-btn"><i className="fas fa-check"></i></button>
                <button className="trash-btn"><i className="fas fa-trash"></i></button>
            </div>
        </Fragment>
    );
}

export default Item;
