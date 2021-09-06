import React, {Fragment} from 'react';
import '../../style/pages/home/item.scss';
import Update from "./Update";

const Item = (props) => {
    let {todo} = props;

    const onUpdate = (obj) => {
        props.updateList(obj)
    };

    return (
        <Fragment>
            <div className="todo">
                {
                    todo.isUpdate
                        ? <Update item={todo} update={onUpdate}/>
                        : <li className="todo-item">{todo.name}</li>
                }
                {
                    todo.isUpdate
                        ? ''
                        : <button className="edit-todo-btn" onClick={ () => props.onEdit(todo.id) }><i className="fas fa-edit"></i></button>
                }
                <button className="trash-btn" onClick={() => props.onDelete(todo.id)}><i className="fas fa-trash"></i></button>
            </div>
        </Fragment>
    );
};

export default Item;
