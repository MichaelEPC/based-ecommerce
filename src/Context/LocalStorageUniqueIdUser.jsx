import React from "react";

function LocalStorageUniqueUserId() {
    const [userID, setUserID] = React.useState(0);
    let id = 0;

    React.useEffect(() => {
        setTimeout(() => {
            const userConcurrence = localStorage.getItem('uniqueId-YourStore');
            id = JSON.parse(userConcurrence);
            id = parseInt(id)
            if (!id) {
                try {
                    localStorage.setItem('uniqueId-YourStore', JSON.stringify(0));
                } catch (error) {
                    alert(error)
                }
            } else {
                try {
                    setUserID(id);
                } catch (error) {
                    alert(error)
                }
            }
        }, 2000);
    })

    const updateUniqueId = (id) => {
        id = parseInt(id)
        localStorage.setItem('uniqueId-YourStore', JSON.stringify(id));
        setUserID(id);
    }
    
    return {userID, updateUniqueId};
}

export { LocalStorageUniqueUserId }