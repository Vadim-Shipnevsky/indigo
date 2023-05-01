import stules from './consultations.module.scss'

const Consultations = ({ number, name, stule }) => {

    return (
        <div style={stule} className={stules.container}>
            <p>{number}</p>
            <p>{name}</p>
        </div>
    )
}

export default Consultations