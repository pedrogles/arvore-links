import "./user.scss";

export default function User({  image, alt, name, description }) {
  return (
    <section className="user">
      <img className="user-image" src={image} alt={alt} />
      <h2 className="user-name">{name}</h2>
      <p className="user-description">{description}</p>
    </section>
  );
}
