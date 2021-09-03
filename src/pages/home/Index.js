import React, {Fragment, useState, useEffect} from 'react';
import List from '../home/List';
import Add from '../home/Add';
import '../../style/pages/home/index.scss';
import Error from '../../components/messages/Error'

let id = 0;
const Index = () => {
    const isLogin = 1;
    const errorMsg = 'Vui long login';
    const [update, setUpdate] = useState(0);
    const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todoList')) ?? []);
    const isUpdate = false;


    const handleAdd = (form) => {
        id = id + 1;
        let item = {...form, id : id, isUpdate : isUpdate};
        setTodo([...todo, item]);
    }

    const handleEdit = (id) => {
        setUpdate(id);
    }

    // handle display data edit
    useEffect(() => {
        let index = todo.findIndex((todo => todo.id === update));
        let newArr = [...todo];
        newArr[index] = {...newArr[index], isUpdate: true};
        setTodo(newArr);
    }, [update]);

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todo));
    }, [todo]);

    const handleUpdate = (item) => {
        let index = todo.findIndex((todo => todo.id === item.id));
        let newTodo = [...todo];

        newTodo[index].name = item.name;
        newTodo[index].isUpdate = isUpdate;
        setTodo(newTodo);
        setUpdate(0);
    };

    const handleDelete = (id) => {
        const newTodo = todo.filter(todo => todo.id !== id);
        setTodo(newTodo);
    }

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
