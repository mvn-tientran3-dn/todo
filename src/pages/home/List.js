import React, {Fragment} from 'react';
import '../../style/pages/home/list.scss';
import Item from "../home/Item";

const List = (props) => {
    const {todo} = props;

    const handleEdit = (value) => {
        props.edit(value);
    }

    const handleUpdate = (obj) => {
        props.update(obj);
    }

    const handleDelete = (id) => {
        props.delete(id);
    }

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
                        {
                            todo.map((e,index) => (
                                <Item key={index}
                                      todo={e}
                                      onEdit={handleEdit}
                                      updateList={handleUpdate}
                                      onDelete={handleDelete}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}

export default List;
