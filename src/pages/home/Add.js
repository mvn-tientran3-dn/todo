import React, {Fragment, useState} from 'react';
import '../../style/pages/home/add.scss';

const Add = (props) => {
    const [form, setForm] = useState([]);
    const STATUS_NEW = 1;

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setForm({ ...form, [name]: value, status: STATUS_NEW });
    }

    const onAdd = (e) => {
        e.preventDefault();
        e.target.reset();
        if (form.length !== 0) {
            props.add(form)
            setForm([]);
        }
    };

    return (
        <Fragment>
            <div className="row">
                <div className="intro col-12">
                    <h1>Add todo</h1>
                    <div>
                        <div className="border1"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <form className="form-add-todo" onSubmit={onAdd}>
                    <input type="text" className="todo-input" placeholder="enter your work..." name="name" onChange={handleChange}/>
                    <button className="todo-button" type="submit">
                        <i className="fas fa-plus-square"/>
                    </button>
                </form>
            </div>
        </Fragment>
    );
}

export default Add;
