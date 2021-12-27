import "./Home.scss";

export default function Home() {
  return (
    <section className="home">
      <article className="home-register">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3679b63e-5d92-47a1-96ec-b26d86fc0f0a/99376ec4-5152-442f-ad04-1580bfc5126a/VN-en-20211213-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Netflix hero"
        />
        <div className="content">
          <h2>Unlimited movies, TV shows, and more.</h2>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <span>
            <input type="text" />
            <button>
              Get Started <i className="fas fa-chevron-right" />
            </button>
          </span>
        </div>
      </article>
      <article className="article-1">
        <h2>Enjoy on your TV.</h2>
        <h4>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </h4>
      </article>
      <article className="article-2">
        <h2>Download your shows to watch offline.</h2>
        <h4>Save your favorites easily and always have something to watch.</h4>
      </article>
      <article className="article-3">
        <h2>Watch everywhere.</h2>
        <h4>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </h4>
      </article>
      <article className="article-4">
        <h2>Create profiles for kids.</h2>
        <h4>
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </h4>
      </article>
      <article className="article-5">
        <h2>Unlimited movies, TV shows, and more.</h2>
        <h4>Watch anywhere. Cancel anytime.</h4>
      </article>
      <article className="article-6">
        <h2>Unlimited movies, TV shows, and more.</h2>
        <h4>Watch anywhere. Cancel anytime.</h4>
      </article>
    </section>
  );
}
