import './Avatar.css';

const Avatar = props => {
    return (
        <div className={`avatar ${props.className}`}  style={props.style}>
            <img
            src={props.image}
            alt={props.alt}
            style={{wisth:props.width, height: props.width}}
            />
        </div>
    )
}

export default Avatar;