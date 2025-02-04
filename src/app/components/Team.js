import React from 'react';
import styles from '../styles/Team.module.css';
import Link from 'next/link';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const TeamMember = ({ name, title, imgSrc, linkedIn, altText, index }) => {
  return (
    <div className={styles.teamMember}>
      <div className={styles.imageContainer}>
        <Image 
          src={imgSrc} 
          alt={altText} 
          className={styles.teamImage} 
          width={300} 
          height={300} 
        />
      </div>
      <div className={styles.overlay}>
        <div className={styles.text}>
          <h3>{name}</h3> 
          <p>{title}</p>
          <p>
            <Link href={linkedIn} target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: 'Manpreet Dandiwal',
      title: 'Managing Director',
      imgSrc: '/images/man/manpreet.jpg',
      linkedIn: "https://www.linkedin.com/in/manpreet-dandiwal-184600112/",
      altText: "Manpreet Dandiwal, Managing Director at BCA CORP"
    },
    {
      name: 'Michael Ellis',
      title: 'Director',
      imgSrc: '/images/man/macheal.jpg',
      linkedIn: "https://www.linkedin.com/in/michael-ellis-94b83614a/",
      altText: "Michael Ellis, Director at BCA CORP"
    },
    {
      name: 'Jarrod Membrey',
      title: 'General Manager',
      imgSrc: '/images/man/jarrod.jpg',
      linkedIn: "https://www.linkedin.com/in/jarrod-membrey-a344216/",
      altText: "Jarrod Membrey, General Manager at BCA CORP"
    },
  ];

  return (
    <div className={styles.teamSection}>
      <div className={styles.gallery}>
        <div className={styles.leftColumn}>
          <h2>Our great team</h2>
          <p>Manpreet Dandiwal, the Managing Director, oversees operations with a keen eye for detail. Michael Ellis, the Director, leads with vision and strategic direction, ensuring our success. Jarrod Membrey, the General Manager, ensures smooth daily operations and exceptional service. Nick Gupta, our Strategic Advisor, brings a wealth of expertise to our projects.</p>
        </div>
        <div className={styles.teamMemberContainer}>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
