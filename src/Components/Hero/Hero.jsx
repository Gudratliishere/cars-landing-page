import './Hero.css'
import arrowBtn from '../../assets/arrow_btn.png'
import playIcon from '../../assets/play_icon.png'
import pauseIcon from '../../assets/pause_icon.png'

const Hero = ({ playStatus, setPlayStatus, heroCount, setHeroCount, heroData }) => {
    return (
        <div className='hero'>
            <div className="hero-text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="hero-explore">
                <p>Explore the features</p>
                <img src={arrowBtn} />
            </div>
            <div className="hero-dot-play">
                <ul className='hero-dots'>
                    <li className={heroCount === 0 ? 'hero-dot orange' : 'hero-dot'}
                        onClick={() => setHeroCount(0)}></li>
                    <li className={heroCount === 1 ? 'hero-dot orange' : 'hero-dot'}
                        onClick={() => setHeroCount(1)}></li>
                    <li className={heroCount === 2 ? 'hero-dot orange' : 'hero-dot'}
                        onClick={() => setHeroCount(2)}></li>
                </ul>
                <div className="hero-play">
                    <img onClick={() => setPlayStatus(!playStatus)}
                        src={playStatus ? pauseIcon : playIcon} />
                    <p>See the video</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
