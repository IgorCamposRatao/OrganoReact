import './Character.css'

const Character = ({ name, clas, image, backgroundColor }) => {



    return (
        <div className='character'>
            <div className='header' style={{ backgroundColor: backgroundColor }}>
                <img src={image} alt={name} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{clas}</h5>
            </div>
        </div>
    )
}
export default Character