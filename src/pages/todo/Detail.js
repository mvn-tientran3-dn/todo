import React  from "react";
import {useParams} from "react-router-dom";

const Detail = (props) => {
    const {id} = useParams();
    const todo = JSON.parse(localStorage.getItem('todoList'));
    let index = todo.findIndex((todo => todo.id === parseInt(id)));

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
