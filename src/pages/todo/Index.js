import React, {Fragment} from 'react';
import '../../style/pages/todo/todo.scss';
import Item from "./Item";
import {useSelector} from "react-redux";

const Index = () => {
    const todo = useSelector((state => state.todoList.todo));

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
                <div className="list-work col-12">
                    {
                        todo.map((e,index) => (
                            <Item key={index}
                                  item={e}
                            />
                        ))
                    }
                </div>
            </div>
        </Fragment>
    );
}

export default Index;
