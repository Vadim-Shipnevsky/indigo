import stules from './button.module.scss'

const Button = ({ text, stulesButton }) => {
    return (
        <div style={stulesButton} className={stules.container}>
            <button className={stules.button}>{text}</button>
        </div>
    )
}

export default Button