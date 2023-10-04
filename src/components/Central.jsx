
const Central = ({ src, text }) => {

    return (
        <section className='central-img'>
            <img src={src} alt={text} loading='lazy'/>
            <h2>{text}</h2>
        </section>
    )
}

export default Central