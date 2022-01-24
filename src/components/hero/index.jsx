import './style.scss';

function Hero({hero,title}) {
    return (
        <div className="hero">
           <div className="hero__wrap">

               <img className="hero__image" src={hero} alt="hero"/>
               <div className="hero__title">{title}</div>
           </div>
        </div>
    )
}

export default Hero;