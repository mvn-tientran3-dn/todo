import React, {Fragment, useState} from 'react';
import '../../style/pages/todo/list.scss';
import Item from "./Item";

const List = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="intro col-12">
                    <h1>Work To-Dos</h1>
                    <div>
                        <div className="border1"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="listItems col-12">
                    <ul className="">
                        <Item/>
                        <Item/>
                        <Item/>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}

export default List;
