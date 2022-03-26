import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/mfd.png"
          alt="An image showing Mauricio"
          width={400}
          height={400}
        />
      </div>
      <h1>Hi, I'm Mauricio</h1>
      <p>I blog about web and mobile development</p>
    </section>
  );
}

export default Hero;
