"use client";
import styles from '../styles/HeaderNavbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneVolume, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const HeaderNavbar = () => {
  return (
    <div className={styles.HeaderNavbar}>
      <div className={styles.RightContent}>
        <div className={styles.AddressContainer}>
          <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
          <h6 className={styles.h6}>Melbourne, Victoria</h6>
        </div>
        <span className={styles.BreakLine}>|</span>
        <div className={styles.NumberContainer}>
          <FontAwesomeIcon icon={faPhoneVolume} className={styles.icon} />
          <h6 className={styles.h6}><a href="tel:+61392224000" className={styles.phoneLink}>03 9222 4000</a></h6>
        </div>
      </div>
      <div className={styles.LeftContent}>
        <div className={styles.TimingContainer}>
          <FontAwesomeIcon icon={faPhoneVolume} className={styles.icon} />
          <h6 className={styles.h6}><a href="tel:+61413066115" className={styles.phoneLink}>04 1306 6115</a></h6>
        </div>
        <span className={styles.BreakLine}>|</span>
        <div className={styles.icons}>
          <span className={styles.icon}><FontAwesomeIcon icon={faFacebookF} /></span>
          <span className={styles.icon}><FontAwesomeIcon icon={faTwitter} /></span>
          <span className={styles.icon}><FontAwesomeIcon icon={faYoutube} /></span>
          <span className={styles.icon}><FontAwesomeIcon icon={faInstagram} /></span>
          <span className={styles.icon}><FontAwesomeIcon icon={faLinkedinIn} /></span>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavbar;
