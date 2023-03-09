import "../../styles/link/link.scss";

export default function Link ({icon, href}) {
    return (
        <>
            <a className="link" href={href} target="_blank" rel="noopener noreferrer">{icon}</a>
        </>
    )
}