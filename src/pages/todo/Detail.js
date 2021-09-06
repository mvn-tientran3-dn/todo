import React  from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const Detail = (props) => {
    const {id} = useParams();
    const todo = useSelector((state => state.todoList.todo));
    let index = todo.findIndex((todo => todo.id === id));

    return <div className="row">
        <div className="col-12">
            <h1>Detail task: {todo[index].name}</h1>
            <div>
                <div className="border1">
                    <p>bạn đang ở trang detail</p>
                </div>
            </div>
        </div>
    </div>
}

export default Detail
