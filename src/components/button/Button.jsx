import "../../styles/button/button.scss";

export default function Button ({ name, href}) {
    return (
        <>
            <a className="button" href={href} target="_blank" rel="noopener noreferrer">{name}</a>
        </>
    )
}