import React from "react";

const Users = (props) => {
    debugger
    return (
        <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoURL} />
                    </div>
                </span>
                <span>
                    {u.followed
                        ? <button onClick={ () => {props.unfollowUser(u.id) } } >Follow</button>
                        : <button onClick={ () => {props.followUser(u.id) } } >Unfollow</button>
                    }
                </span>
                <span>
                    <div>{u.nameUser}</div>
                    <div>{u.age}</div>
                </span>
                <span>
                    <div>{u.status}</div>
                </span>

            </div>)
        }
        </div>
    )
}
export default Users;