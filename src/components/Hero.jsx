import styles from "./Hero.module.css";
import newData from "../data/newData.json";
import articlesData from "../data/articlesData.json";

const Hero = () => {
  return (
    <main className={styles.hero}>
      <div className={styles.web3__image}>
        <img src="/images/image-web-3-desktop.jpg" alt="web3" />
      </div>
      <h2 className={styles.web3__title}>The Bright Future of Web 3.0?</h2>
      <div className={styles.web3__info}>
        <p className={styles.web3__info__text}>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <div>
          <button className={styles.web3__info__btn}>Read more</button>
        </div>
      </div>

      <section className={styles.new}>
        <h2>New</h2>
        <ul>
          {newData.new.map((article, index) => (
            <li className={styles.new__article} key={index}>
              <h3 className={styles.new__article__title}>{article.title}</h3>
              <p>{article.text}</p>
              {index !== newData.new.length - 1 && <hr />}
            </li>
          ))}
        </ul>
      </section>

      {articlesData.articles.map((article, index) => (
        <article className={styles.article} key={index}>
          <img src={article.imageurl} alt={article.title} />
          <div className={styles.article__text}>
            <p className={styles.article__text__index}>{article.index}</p>
            <h2 className={styles.article__text__title}>{article.title}</h2>
            <p className={styles.article__text__info}>{article.info}</p>
          </div>
        </article>
      ))}
    </main>
  );
};

export default Hero;
