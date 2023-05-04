import "../../styles/user/user.scss";

export default function User({ Image, ImageAlt, Name, Description }) {
  return (
    <section className="user">
      <img src={Image} alt={ImageAlt} />
      <h2>{Name}</h2>
      <p>{Description}</p>
    </section>
  );
}
