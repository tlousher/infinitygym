import React from 'react';
import styles from "./styles.module.scss";
import {Carousel} from "antd";
import Image from "../../components/Image";

const HomeCarousel = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide)
    }
    return (
        <Carousel afterChange={onChange} autoplay>
            <div className={styles.carrouselPicture}>
                <Image
                    src={`${process.env.PUBLIC_URL}/resources/images/jujitsu_5.jpg`}
                    style={{maxHeight: 550}}
                />
            </div>
            <div className={styles.carrouselPicture}>
                <Image
                    src={`${process.env.PUBLIC_URL}/resources/images/jujitsu_2.jpg`}
                    style={{maxHeight: 550}}
                />
            </div>
            <div className={styles.carrouselPicture}>
                <Image
                    src={`${process.env.PUBLIC_URL}/resources/images/jujitsu_4.jpg`}
                    style={{maxHeight: 550}}
                />
            </div>
            <div className={styles.carrouselPicture}>
                <Image
                    src={`${process.env.PUBLIC_URL}/resources/images/jujitsu_6.jpg`}
                    style={{maxHeight: 550}}
                />
            </div>
        </Carousel>
    );
};

export default HomeCarousel;