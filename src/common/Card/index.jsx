import styles from './index.module.scss';

const Card = (props) => {
  const { children, className, style } = props;
  return (
    <div className={`${styles.card} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
