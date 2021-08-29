import React, {Fragment, useState} from 'react';
import '../../style/pages/todo/add.scss';

const Add = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="intro col-12">
                    <h1>Add todo</h1>
                    <div>
                        <div className="border1"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <form>
                    <input type="text" className="todo-input" placeholder="enter your work..."/>
                        <button className="todo-button" type="submit">
                            <i className="fas fa-plus-square"></i>
                        </button>
                </form>
            </div>
        </Fragment>
    );
}

export default Add;
