import styles from "./teachers.module.css";
import teacher1 from "../images/achraf.jpeg";
import teacher2 from "../images/yassine.png";
import teacher3 from "../images/soufiane.png";
import teacher4 from "../images/khalil.jpg";
// import teacher5 from "../../images/teacher5.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Teachers = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.root} id="teachers">
      <section className={styles.container}>
        <div className={styles.teacher} data-aos="fade-down">
          <div className={styles.imageContainer}>
            <img src={teacher1} alt="" className={styles.image} />
          </div>
          <p className={styles.name}>achraf laayachi</p>
          <p className={styles.domain}>Art Teacher</p>
        </div>
        <div className={styles.teacher} data-aos="fade-down">
          <div className={styles.imageContainer}>
            <img src={teacher2} alt="" className={styles.image} />
          </div>
          <p className={styles.name}>Badr Ghanbi</p>
          <p className={styles.domain}>English Teacher</p>
        </div>
        <div className={styles.teacher} data-aos="fade-down">
          <div className={styles.imageContainer}>
            <img src={teacher3} alt="" className={styles.image} />
          </div>
          <p className={styles.name}>Soufiane El Ghazi</p>
          <p className={styles.domain}>Physics Teacher</p>
        </div>
        <div className={styles.teacher} data-aos="fade-down">
          <div className={styles.imageContainer}>
            <img src={teacher4} alt="" className={styles.image} />
          </div>
          <p className={styles.name}>Khalil Jamghili</p>
          <p className={styles.domain}>Maths Teacher</p>
        </div>
      </section>
    </div>
  );
};
export default Teachers;
