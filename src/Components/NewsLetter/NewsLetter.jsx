import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers to your Email</h1>
      <p>Subscribe to our Newsletter and stay updated</p>
      <div>
        <input type="email" name="email" id="email" placeholder="Email ID" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
