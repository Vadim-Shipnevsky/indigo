import style from './consultationsSvg.module.scss'

const ConsultationsSvg = ({props}) => {
    return (
        <>
            <svg className={style.svg}  viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path style={props} d="M1 1L12.25 12.5L23.5 1" stroke="transparent" stroke-width="2" stroke-linecap="round" />
            </svg>

        </>
    )
}

export default ConsultationsSvg