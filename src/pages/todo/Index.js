import React, {Fragment, useState} from 'react';
import List from './List';
import Add from './Add';
import '../../style/pages/todo/index.scss';
import Error from '../../components/messages/Error'

const Index = () => {
    const isLogin = 1;
    const errorMsg = 'Vui long login';

    return (
        <Fragment>
            {
                isLogin
                    ? <div className="row">
                        <div className="col-4">
                            <Add/>
                        </div>
                        <div className="col-8">
                            <List/>
                        </div>
                    </div>
                    : <Error msg={errorMsg}/>
            }
        </Fragment>
    );
}

export default Index;
