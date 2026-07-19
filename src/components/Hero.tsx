export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-copy reveal">
        <p className="eyebrow">MacBook Pro</p>
        <h1>Fast runs in the family.</h1>
        <img
          src="/title.png"
          alt="MacBook Pro"
          width="800"
          height="600"
        />
      </div>
      <video src="/videos/hero.mp4" autoPlay muted playsInline loop />
      <div className="hero-actions reveal">
        <a className="buy-button" href="#shop">
          Buy
        </a>
        <a className="learn-link" href="#showcase">
          Learn more
        </a>
      </div>
      <p>From $2499 or $208.25/mo. for 12 months</p>
    </section>
  );
}
