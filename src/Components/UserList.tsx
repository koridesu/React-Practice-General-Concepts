import { User } from '../Constants/Interfaces';
import Card from './UI/Card';
import classes from './UserList.module.css';
interface Props {
  userList: User[];
}

function UserList(props: Props) {
  return (
    <ul style={{ display: 'grid', justifyContent: 'center' }}>
      {props.userList.map((item, index) => {
        return (
          <Card className={classes['user-list']}>
            <li key={index} style={{ listStyle: 'none' }}>
              <p> Name: {item.username}</p>
              {item.age ? <p>Age: {item.age}</p> : null}
            </li>
          </Card>
        );
      })}
    </ul>
  );
}

export default UserList;
