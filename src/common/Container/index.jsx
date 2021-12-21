import styles from './index.module.scss';

const Container = (props) => {
  const { children } = props;
  return <div className={styles['e-container']}>{children}</div>;
};

export default Container;
