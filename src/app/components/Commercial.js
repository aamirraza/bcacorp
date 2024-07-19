"use client";

import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/Commercial.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Commercial = () => {
  const imageListRef = useRef(null);
  const scrollbarThumbRef = useRef(null);

  const testimonials = [
    {
      companyLogo: "/images/clients/iga.svg",
      companyInfo: "The integration of Verida’s decentralised identity storage wallet with the cheqd network offers a compelling vision of ‘Not your keys, not your identity’. People’s digital selves should be in their control, and this includes being able to store their credentials outside of the control of Big Tech providers.",
      authorName: "Sebastian Rodriguez",
      authorPosition: "VP of Product, Polygon ID",
      imgSrc: "/images/testimonials/firstImage.png"
    },
    {
      companyLogo: "/images/clients/anytimeheader-logo.png",
      companyInfo: "We’re excited to support the Verida team as they add more NEAR features to their excellent product. Ease of use and low switching costs are key to mainstream Web3 adoption, so it’s exciting that the Verida Wallet will soon make DIDs and messaging available to NEAR users on mobile.",
      authorName: "Illia Polosukhin",
      authorPosition: "Co-Founder, NEAR",
      imgSrc: "/images/testimonials/secondImage.png"
    },
    {
      companyName: "/images/clients/subway-logo.avif",
      companyInfo: "The integration of Verida’s decentralised identity storage wallet with the cheqd network offers a compelling vision of ‘Not your keys, not your identity’. People’s digital selves should be in their control, and this includes being able to store their credentials outside of the control of Big Tech providers.",
      authorName: "Ankur Banerjee",
      authorPosition: "CTO and Co-Founder, cheqd",
      imgSrc: "/images/testimonials/thirdImage.png"
    },
    {
      companyName: "Pakass",
      companyInfo: "We’re delighted to team up with Verida in our shared vision to enhance private data verification. Our technology, designed to offer secure and private authentication through cryptography technologies, complements Verida’s commitment to privacy and decentralization. Together, we aim to redefine user experience in the digital space.",
      authorName: "Bing Jiang",
      authorPosition: "Tech Lead, zkPass",
      imgSrc: "/images/testimonials/fourImage.png"
    },
    {
      companyName: "PartisiaBlockchain",
      companyInfo: "We’re delighted to team up with Verida in our shared vision to enhance private data verification. Our technology, designed to offer secure and private authentication through cryptography technologies, complements Verida’s commitment to privacy and decentralization. Together, we aim to redefine user experience in the digital space.",
      authorName: "Kurt Nielsen",
      authorPosition: "President of the Board, Partisia Blockchain",
      imgSrc: "/images/testimonials/firstImage.png"
    },
    {
      companyName: "FinClusive",
      companyInfo: "Expanding our partnership with Verida with the support of cheqd is very exciting as we work to build a ‘consortia’ of partners. Together, we are enabling a globally transportable KYC/KYB verifiable credential that streamlines essential compliance processes and brings needed privacy controls",
      authorName: "Amit Sharma",
      authorPosition: "Founder and CEO, FinClusive",
      imgSrc: "/images/testimonials/secondImage.png"
    }
  ];

  const handleNextSlide = () => {
    if (imageListRef.current) {
      const maxScrollLeft = imageListRef.current.scrollWidth - imageListRef.current.clientWidth;
      const scrollAmount = imageListRef.current.clientWidth+10;
      const newScrollLeft = Math.min(imageListRef.current.scrollLeft + scrollAmount, maxScrollLeft);
      imageListRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const handlePrevSlide = () => {
    if (imageListRef.current) {
      const scrollAmount = imageListRef.current.clientWidth+10;
      const newScrollLeft = Math.max(imageListRef.current.scrollLeft - scrollAmount, 0);
      imageListRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const updateScrollThumbPosition = () => {
    if (imageListRef.current && scrollbarThumbRef.current) {
      const maxScrollLeft = imageListRef.current.scrollWidth - imageListRef.current.clientWidth;
      const scrollPosition = imageListRef.current.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (imageListRef.current.clientWidth - scrollbarThumbRef.current.offsetWidth);
      scrollbarThumbRef.current.style.left = `${thumbPosition}px`;
    }
  };

  useEffect(() => {
    const imageListElement = imageListRef.current;
    const scrollbarThumbElement = scrollbarThumbRef.current; // Copy ref to a variable

    const handleMouseMove = (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumbElement.offsetLeft;
      const maxThumbPosition = imageListElement.clientWidth - scrollbarThumbElement.offsetWidth;

      const onMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;
        const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
        const maxScrollLeft = imageListElement.scrollWidth - imageListElement.clientWidth;
        const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

        scrollbarThumbElement.style.left = `${boundedPosition}px`;
        imageListElement.scrollLeft = scrollPosition;
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    if (scrollbarThumbElement) {
      scrollbarThumbElement.addEventListener('mousedown', handleMouseMove);
    }

    const handleScroll = () => {
      updateScrollThumbPosition();
    };

    if (imageListElement) {
      imageListElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollbarThumbElement) {
        scrollbarThumbElement.removeEventListener('mousedown', handleMouseMove);
      }

      if (imageListElement) {
        imageListElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className={styles.commercial} id='projects'>
      <div className={styles.commercialContainer}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Projects</h2>
          <p className={styles.description}>
            High performance businesses need high-performance places to function as the engine-rooms of their success. From the home of Australia’s biggest blue-chip companies to world-class innovation precincts supporting the next wave of entrepreneurs, our commercial neighbourhoods are fueling the future of work.
          </p>
        </div>
        <div className={styles.sliderWrapper}>
          <button
            id="prev-slide"
            className={`${styles.slideButton} ${styles.leftButton}`}
            onClick={handlePrevSlide}
          >
            <MdChevronLeft />
          </button>
          <ul className={styles.cardList} ref={imageListRef}>
          <li className={styles.card}>
              <div className={styles.imageContainer}>
                <Image src="/images/commercial/THRONHILL_PARK-110.jpg" alt="Asset 1" className={styles.image} width={200} height={100} />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.location}>VIC, Thornhill Park</p>
                <h4 className={styles.projectName}>Central Square</h4>
                <p className={styles.features}>
                  Features world-leading carbon neutral NABERS & Platinum WELL certified offices.
                </p>
                <div className={styles.footer}>
                  <Link href={'https://www.pspproperty.com.au/property?property_id=1064509/2-sadie-avenue-thornhill-park'} target="_blank" rel="noopener noreferrer"><button className={styles.leasing}>Leasing now</button></Link>
                  <Link href={'/thornhill'}><button className={styles.detailsLink}>More details ➔</button></Link>
                </div>
              </div>
            </li>
            <li className={styles.card}>
              <div className={styles.imageContainer}>
                <Image src="/images/cars.jpg" alt="Asset 1" className={styles.image} width={200} height={100} />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.location}>VIC, Thornhill Park</p>
                <h4 className={styles.projectName}>Central Square</h4>
                <p className={styles.features}>
                  Features world-leading carbon neutral NABERS & Platinum WELL certified offices.
                </p>
                <div className={styles.footer}>
                  <Link href={'https://www.pspproperty.com.au/property?property_id=1064509/2-sadie-avenue-thornhill-park'} target="_blank" rel="noopener noreferrer"><button className={styles.leasing}>Leasing now</button></Link>
                  <Link href={'/thornhill'}><button className={styles.detailsLink}>More details ➔</button></Link>
                </div>
              </div>
            </li>
            <li className={styles.card}>
              <div className={styles.imageContainer}>
                <Image src="/images/building.jpg" alt="Asset 1" className={styles.image} width={200} height={100} />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.location}>VIC, Thornhill Park</p>
                <h4 className={styles.projectName}>Central Square</h4>
                <p className={styles.features}>
                  Features world-leading carbon neutral NABERS & Platinum WELL certified offices.
                </p>
                <div className={styles.footer}>
                  <Link href={'https://www.pspproperty.com.au/property?property_id=1064509/2-sadie-avenue-thornhill-park'} target="_blank" rel="noopener noreferrer"><button className={styles.leasing}>Leasing now</button></Link>
                  <Link href={'/thornhill'}><button className={styles.detailsLink}>More details ➔</button></Link>
                </div>
              </div>
            </li>
            <li className={styles.card}>
              <div className={styles.imageContainer}>
                <Image src="/images/cars.jpg" alt="Asset 1" className={styles.image} width={200} height={100} />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.location}>VIC, Thornhill Park</p>
                <h4 className={styles.projectName}>Central Square</h4>
                <p className={styles.features}>
                  Features world-leading carbon neutral NABERS & Platinum WELL certified offices.
                </p>
                <div className={styles.footer}>
                  <Link href={'https://www.pspproperty.com.au/property?property_id=1064509/2-sadie-avenue-thornhill-park'} target="_blank" rel="noopener noreferrer"><button className={styles.leasing}>Leasing now</button></Link>
                  <Link href={'/thornhill'}><button className={styles.detailsLink}>More details ➔</button></Link>
                </div>
              </div>
            </li>
            {/* Add more cards here */}
          </ul>
          <button
            id="next-slide"
            className={`${styles.slideButton} ${styles.rightButton}`}
            onClick={handleNextSlide}
          >
            <MdChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Commercial;

