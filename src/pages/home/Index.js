import React, {Fragment, useEffect} from 'react';
import List from '../home/List';
import Add from '../home/Add';
import '../../style/pages/home/index.scss';
import Error from '../../components/messages/Error'
import {useDispatch, useSelector} from "react-redux";
import {add, deleteAction, edit, show, update} from "../../feature/todo/todoSlice";

let id = 0;
const Index = () => {
    const todo = useSelector((state) => state.todoList.todo); // state.teen cuar reducer.teen state
    const itemShow = useSelector((state) => state.todoList.itemShow); // state.teen cuar reducer.teen state
    const dispatch = useDispatch();
    // useEffect(() => {
    //     console.log(itemShow);
    // }, [itemShow]);

    const isLogin = 1;
    const errorMsg = 'Vui long login';
    const isUpdate = false;

    /**
     * Handle add
     *
     * @param form
     */
    const handleAdd = (form) => {
        id = id + 1;
        let item = {...form, id : id, isUpdate : isUpdate};
        dispatch(add(item));
    }

    /**
     * Handle edit
     *
     * @param id
     */
    const handleEdit = (id) => {
        dispatch(show(id));
    };

    /**
     * Listen id when click edit button
     */
    useEffect(() => {
        let index = todo.findIndex((todo => todo.id === itemShow));
        let newArr = [...todo];
        newArr[index] = {...newArr[index], isUpdate: !isUpdate};

        dispatch(edit(newArr));
    }, [itemShow]);// eslint-disable-line react-hooks/exhaustive-deps

    /**
     * Listen todo state change
     */
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todo));
    }, [todo]);

    /**
     * Handle update
     *
     * @param item
     */
    const handleUpdate = (item) => {
        dispatch(update(item));
        dispatch(show(0));
    };

    /**
     * Handle delete
     *
     * @param id
     */
    const handleDelete = (id) => {
        dispatch(deleteAction(id));
    };

    return (
        <Fragment>
            {
                isLogin
                    ? <div className="row">
                        <div className="col-4">
                            <Add add={handleAdd}/>
                        </div>
                        <div className="col-8">
                            <List todo={todo}
                                  edit={handleEdit}
                                  update={handleUpdate}
                                  delete={handleDelete}
                            />
                        </div>
                    </div>
                    : <Error msg={errorMsg}/>
            }
        </Fragment>
    );
}

export default Index;
