import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Container from '../../common/Container';
import styles from './index.module.scss';

const AboutPage = () => (
  <Container>
    <div className={styles.about}>
      <div className={styles.about__picture}>
        <figure className={styles.about__figure}>
          <img
            className={styles.about__image}
            src="./images/photo.jpg"
            alt="victor"
          />
        </figure>
        <hr />
        <div className={styles.about__email}>
          <a
            className={styles.about__link}
            href="mailto:torvic02st96@gmail.com"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <span className={styles.about__text_spaceSides}>
              torvic02st96@gmail.com
            </span>
          </a>
        </div>
        <hr />
        <div className={styles.about__social}>
          <a
            className={styles.about__link}
            href="https://github.com/torvic"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            className={styles.about__link}
            href="https://www.linkedin.com/in/victor-salcedo-turpo-3171ab12a/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
      <div className={styles.about__info}>
        <h2 className={styles.about__title}>Hi there, I&apos;am Victor</h2>
        <p className={styles.about__text}>
          A Full Stack Developer who specializes in JavaScript Technologies
          across the whole stack (MongoDB, Node.js, Express, React). Experience
          building complete web applications with backend API Systems.
        </p>
        <p className={styles.about__text}>
          I am an incredibly driven individual who enjoys learning, optimizing,
          and incorporating best practices into my work. By having both a
          business and technical background, I bring the strength of an
          analytical mindset that is balanced with the soft skills of teamwork,
          presenting ideas, and project management. Outside of work, I am an
          avid runner and enjoy spending time with my family.
        </p>
        <h2 className={styles.about__title}>I learned in the program:</h2>
        <p className={styles.about__text}>
          Javascript, Node.js, React.js, Redux, HTML, CSS, Git, Github & Scrum
        </p>
      </div>
    </div>
  </Container>
);

export default AboutPage;
