import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import '../../style/pages/todo/todo.scss';

const Item = (props) => {
    let {item} = props;

    return (
        <Fragment>
                <div className="item col-3">
                    <div className="title">
                        <Link  to={{ pathname: '/todo/'+item.id}} key={item.id}>
                        <span>Task: </span>
                        <span>{item.name}</span>
                        </Link>
                    </div>
                    <div className="detail">
                        <span>HTML is the standard markup language for Web pages.<br/>
                            With HTML you can create your own Website.<br/>
                            HTML is easy to learn - You will enjoy it!<br/>
                        </span>
                    </div>
                </div>
        </Fragment>
    );
}

export default Item;
