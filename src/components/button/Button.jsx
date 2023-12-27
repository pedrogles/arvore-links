import "./button.scss";

export default function Button({ name, href }) {
  const handleButton = () => {
    window.location.href = href;
  };
  return (
    <>
      <button className="button" onClick={handleButton}>
        {name}
      </button>
    </>
  );
}
