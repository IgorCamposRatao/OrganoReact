
import './TextField.css'
const TextField = (props) => {
    return (
        <div className="field-text">
            <label >{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    )
}

export default TextField