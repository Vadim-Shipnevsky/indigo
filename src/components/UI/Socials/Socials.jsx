import stules from './socials.module.scss'
import Image from 'next/image';


const Socials = ({ props }) => {
    return (
        <div className={stules.container}>
            <Image className={stules.image} src={"/socials.png"} alt='' width={53.28} height={53.28} />
            <p>{props}</p>
        </div>
    )
}

export default Socials