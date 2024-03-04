import React from "react";

function LocalStorageConcurrenUser() {
    const [currentUser, setCurrentUser] = React.useState(null);
    let user;

    React.useEffect(() => {
        setTimeout(() => {
            const userConcurrence = localStorage.getItem('currenUser-YourStore');
            user = JSON.parse(userConcurrence);
            if (!user) {
                try {
                    localStorage.setItem('currenUser-YourStore', JSON.stringify({ 
                        id: 0,
                        email: '', 
                        password: '', 
                        name: '',
                        adress: '',
                        orders: [],
                        onCart: [],
                      }));
                } catch (error) {
                    alert(error)
                }
            } else {
                try {
                    setCurrentUser(user);
                } catch (error) {
                    alert(error)
                }
            }
        }, 2000);
    })

    const updateCurrenUser = (user) => {
        localStorage.setItem('currenUser-YourStore', JSON.stringify(user));
        setCurrentUser(user);
    }
    
    
    return {currentUser, updateCurrenUser};
}

export { LocalStorageConcurrenUser }