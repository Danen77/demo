import {useContext} from 'react';
import {UserContext} from '../App'

const User = () => {
    const user = useContext(UserContext);
    const handleChangeUser = () => {
      user.setUser('Jane Doe');
    }
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user.user} again!`}</h2>
        <button onClick={handleChangeUser}>Change User</button>
      </>
    );
  }

  export default User;