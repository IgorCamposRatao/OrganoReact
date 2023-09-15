
import './TextField.css'

const TextField = (props) => {



    const typed = (event) => {
        props.modify(event.target.value)
          }

    return (
        <div className="field-text">
            <label >{props.label}</label>
            <input value={props.value} onChange={typed} required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default TextField