import React, {Fragment, useEffect, useState} from 'react';
import '../../style/pages/home/update.scss';

const Update = (props) => {
    let {item} = props;
    const [todoUpdate, setTodoUpdate] = useState(item);

    useEffect(() => {
        setTodoUpdate(item);
    }, [item]);

    const handleChange = (e) => {
        const target = e.target;
        let name = target.name;
        let value = target.value;
        setTodoUpdate({...todoUpdate, [name]: value});
    };

    const onUpdate = (e) => {
        e.preventDefault();
        props.update(todoUpdate)
    };

    return (
        <Fragment>
            <input type="text" className="todo-edit" value={todoUpdate.name} name="name" onChange={handleChange}/>
            <button className="btn-todo-edit" type="submit" onClick={onUpdate}>
                <i className="fas fa-check"></i>
            </button>
        </Fragment>
    );
}

export default Update;
