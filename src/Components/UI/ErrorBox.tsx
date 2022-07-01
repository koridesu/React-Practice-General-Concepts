import Button from './Button';
import Card from './Card';
import classes from './ErrorBox.module.css';

interface Props {
  errorName?: string;
  errorDesc?: string;
  className?: string;
  onClick?: () => void;
}

function ErrorBox(props: Props) {
  return (
    <div className={classes.backdrop}>
      <Card className={`${classes['default-error']} ${props.className}`}>
        <header>
          <h2 className={classes.header}>{props.errorName}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.errorDesc}</p>
        </div>
        <div className={classes.actions}>
          <Button onClick={props.onClick}>Okay</Button>
        </div>
      </Card>
    </div>
  );
}

export default ErrorBox;
