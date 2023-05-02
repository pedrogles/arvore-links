import "../../styles/button/button.scss";

export default function Button({ Name, Href }) {
  const handleButton = () => {
    window.location.href = Href;
  };
  return (
    <>
      <button className="button" onClick={handleButton}>
        {Name}
      </button>
    </>
  );
}
