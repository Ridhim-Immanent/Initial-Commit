import UserItem from './UserItem';
import './UsersList.css';

const UserList = props => {
    if(props.items.length === 0 ){
        return (
            <div className='center'>
                 <h2 className='center'>NO USERS.</h2>
            </div>
           
        )
    }

    return(
        <ul className="users-list">
           {props.items.map(user => {
            return <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places} />
           } )}
        </ul>
    )

};

export default UserList;