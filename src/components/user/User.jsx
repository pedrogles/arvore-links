import '../../styles/user/user.scss';

import UserImage from "../../assets/img/photo.png";

export default function User () {
    return (
        <div id="user">
            <img className="user-image" src={UserImage} alt="Foto do Pedro"/>
            <h2 className="user-name">Pedro Gabriel</h2>
            <p className="user-function">Front-end Developer</p>
        </div>
    )
}