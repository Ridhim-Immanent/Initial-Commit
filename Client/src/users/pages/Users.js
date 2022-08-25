import UserList from "../components/UsersList";


const Users = () => {
// As of now we are not connected to backend so we can't fetch any data to display on our UI.
// So we are creating a dummpy data to showcase the same.
const USER = [
    {
    id: 'u1',
    name:'Ridhim',
    image:'https://www.dreamstime.com/photos-images/small-building.html',
    places:3
}
]

    return (
        <UserList items={USER} />
    )
}

export default Users;