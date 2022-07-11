import { Fragment, useReducer, useState } from 'react';
import Card from './UI/Card';
import classes from './AddUser.module.css';
import Button from './UI/Button';
import { User } from '../Constants/Interfaces';
import ErrorBox from './UI/ErrorBox';

interface Props {
  addUser: (user: any) => void;
}

function AddUser(props: Props) {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<boolean>(false);

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (!user) {
      setError(true);
      return;
    }

    if (!user.username || !user.age) {
      setError(true);
      return;
    }

    if (user.username === '' || user.age < 0) {
      setError(true);
      return;
    }

    props.addUser(user);
    setUser(undefined);
  };

  const onAgeChangeHandler = (e: any) => {
    setUser((prev: any) => {
      return { ...prev, age: e.target.value };
    });
  };

  const onNameChangeHandler = (e: any) => {
    setUser((prev: any) => {
      return { ...prev, username: e.target.value };
    });
  };

  const onErrorConfirm = () => {
    setError(false);
  };

  return (
    <Fragment>
      {error && (
        <ErrorBox
          className={classes['error-empty-user']}
          errorName='Error on AddUser'
          errorDesc='Name can not be empty or age can not less than 0'
          onClick={onErrorConfirm}
        ></ErrorBox>
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor='username'></label>
          <input
            id='username'
            type='text'
            onChange={onNameChangeHandler}
            value={user?.username || ''}
          ></input>
          <label htmlFor='age'></label>
          <input
            id='age'
            type='number'
            onChange={onAgeChangeHandler}
            value={user?.age || ''}
          ></input>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
}

export default AddUser;
