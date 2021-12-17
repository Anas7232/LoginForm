import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore"; 
import { authConstants } from './constants';



const firebaseConfig = {
  apiKey: "AIzaSyD412eVx1ZlA5yUJXZBrXri3wcF4K6EDTE",
  authDomain: "login-authentication-9aadb.firebaseapp.com",
  projectId: "login-authentication-9aadb",
  storageBucket: "login-authentication-9aadb.appspot.com",
  messagingSenderId: "912257348611",
  appId: "1:912257348611:web:ef1f4ecae8e5956cd38a36",
  measurementId: "G-PM6Q6RWQPZ"
};


const app = initializeApp(firebaseConfig);


export const signup = (user) => {
    return async (dispatch) => {

        const db = getFirestore();

        dispatch({ type: authConstants.USER_LOGIN_REQUEST });

        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            const data = userCredential.user;
            console.log(data);
            const name = `${user.firstName} ${user.lastName}`
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                // if You Are Here Then Updated Successfully!!



                try {
                    const users = addDoc(collection(db, "users"), {
                      firstName: user.firstName,
                      lastName: user.lastName,
                      uid: data.uid,
                      createdAt: new Date()
                    })
                    .then(() => {
                        //SuccessFull
                        const loggedInUser = {
                            firstName: user.firstName,
                            lastName: user.lastName,
                            uid: data.uid,
                            email: user.email
                        }
                        localStorage.setItem('user', JSON.stringify(loggedInUser))
                        console.log('User Created Successfully...!!!')
                        dispatch({
                            type: authConstants.USER_LOGIN_SUCCESS,
                            payload: {
                                user: loggedInUser
                            }
                        })
                    })
                    .catch((error) => {
                        console.log(error)
                    });
                  } catch (error) {
                    
                  } 
                  
              }).catch((error) => {
                console.log(error)
                dispatch({ 
                    type: authConstants.USER_LOGIN_FAILURE,
                    payload: {
                        error
                    }
                 })
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage);
          });
    }
}


export const signin = (user) => {
    return async dispatch => {

        dispatch({ type: authConstants.USER_LOGIN_REQUEST });

        const auth = getAuth();
        signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            // Signed in 
            const data = userCredential.user;
            console.log(data);

            const name = data.displayName.split(" "); 
            const firstName = name[0];
            const lastName = name[1];

            const loggedInUser = {
                firstName,
                lastName,
                uid: data.uid,
                email: user.email
            }

            localStorage.setItem('user', JSON.stringify(loggedInUser));

            dispatch({
                type: authConstants.USER_LOGIN_SUCCESS,
                payload: {
                    user: loggedInUser
                }
            })


            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage)
            dispatch({
                type: authConstants.USER_LOGIN_FAILURE,
                payload: {
                    error
                }
            })
        });

    }
}


export const isUserLoggedIn = () => {
    return async dispatch => {

        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

        if(user){
            dispatch({
                type: authConstants.USER_LOGIN_SUCCESS,
                payload: {
                    user
                }
            })
        }else{
            dispatch({
                type: authConstants.USER_LOGIN_FAILURE,
                payload: {
                    error: 'Failed To LoggedIn...!!!'
                }
            })
        }

    }
}


export const logout = () => {
    return async dispatch => {

        dispatch({ type: authConstants.USER_LOGOUT_REQUEST });

        const auth = getAuth();
        signOut(auth,)
        .then(() => {
            // Signed in 
            // const data = userCredential.user;
            // console.log(data);

            localStorage.clear()
            dispatch({ type: authConstants.USER_LOGOUT_SUCCESS });

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage)
            dispatch({
                type: authConstants.USER_LOGOUT_FAILURE,
                payload: {
                    error
                }
            })
        });

    }
}