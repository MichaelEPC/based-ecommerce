import React from "react"

function LocalStorageUser() {
    // User registered : The state keeps the users that had been already created account
    const [users, setUsers] = React.useState([]);
    let usersInformation;

    React.useEffect(() => {
        setTimeout(() => {
            const localInformation = localStorage.getItem('users-YourStore');
            usersInformation = JSON.parse(localInformation);
            if (!usersInformation) {
                try {
                    localStorage.setItem('users-YourStore', JSON.stringify([]))
                } catch (error) {
                    alert(error)
                }
            } else {
                try {
                    setUsers(usersInformation);
                } catch (error) {
                    alert(error)
                }
            }
        }, 2000);
    })

    const updateUsers = (newUsers) => {
        localStorage.setItem('users-YourStore', newUsers);
        setUsers(newUsers);
    }
    return {users, updateUsers}
}

export { LocalStorageUser }