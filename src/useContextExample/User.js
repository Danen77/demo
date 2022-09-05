import {useContext} from 'react';
import {UserContext} from '../App'

const User = () => {
    const user = useContext(UserContext);
    const handleChangeUser = () => {
      user.setUser('Jane Doe');
    }
    return (
      <>
        <h4>{`Hello ${user.user} again!`}</h4>
        <button onClick={handleChangeUser}>Change User</button>
        <button onClick={() => user.setUser('John Doe')}>reset</button>
      </>
    );
  }

  export default User;