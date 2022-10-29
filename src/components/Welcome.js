
import styles from './welcome.module.css'
import Home from '../images/home.png'
import { Button } from 'react-bootstrap'
import Slider from './Slider'
export default function WelcomePage() {
    const bool = true

    return (
        <div style ={{backgroundColor :"#EEEFF3"}}>
            <div className={styles['img-cont']}>
                <div className={styles['title-cont']}>
                    <h1>Online Courses</h1>
                    <Button variant="primary" className={styles['buttonStart']}>Get start</Button>
                    {/* <hr size="10" width="30%" color="blue" className='line'></hr> */}
                    <div className={styles[`line`]}></div>
                </div>
                <div className={styles['imghome']}>
                    <img src={Home}></img>
                </div>
            </div>
            <div className={styles['sider-cont']} >
                    <h1 > Exemple of courses</h1>
                    <Slider />
                </div>
        </div>
    )
}