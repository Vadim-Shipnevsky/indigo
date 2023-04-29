import stules from './button.module.scss'

const Button = ({ text }) => {
    return (
        <div className={stules.container}>
            <button className={stules.button}>{text}</button>
        </div>
    )
}

export default Button