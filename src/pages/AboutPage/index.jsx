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
        <div>
          <img src="" alt="" />
          <span>torvic02st96@gmail.com</span>
        </div>
        <div>
          <img src="" alt="" />
          <span>Linkedin</span>
        </div>
      </div>
      <div className={styles.about__info}>
        <h2>Hi there, I&apos;am Victor</h2>
        <p>
          A Full Stack Developer who specializes in JavaScript Technologies
          across the whole stack (MongoDB, Node.js, Express, React). Experience
          building complete web applications with backend API Systems.
        </p>
        <p>
          I am an incredibly driven individual who enjoys learning, optimizing,
          and incorporating best practices into my work. By having both a
          business and technical background, I bring the strength of an
          analytical mindset that is balanced with the soft skills of teamwork,
          presenting ideas, and project management. Outside of work, I am an
          avid runner and enjoy spending time with my family.
        </p>
        <h2>Skills:</h2>
        <ul>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>React.js</li>
          <li>Redux</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Git & Github</li>
          <li>Scrum</li>
        </ul>
      </div>
    </div>
  </Container>
);

export default AboutPage;
