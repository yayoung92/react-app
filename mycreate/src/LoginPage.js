import React, {useState}  from 'react';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../_actions/user_action';

function LoginPage() {
    return(
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column'}}
                onSubmit={onSumbitHandler}
            >
                <lable>User</lable>
                <input type='user' value={User} onChange={onUserHandler}/>
                <lable>Password</lable>
                <input type='password' value={Password} onChange={onPasswordHandler}/>
                <br/>
                <button formAction=''>
                    Login
                </button>
            </form>
        </div>
    )
}