import React, { useEffect, useState } from "react";
import { useSwiper} from "swiper/react";
import styles from './CarouselRightNavigation.module.css'
import {ReactComponent as RightArrow} from "../../../Assests/Right.svg"

export default function CarouselLeftNavigation(){
    const swiper = useSwiper();
    const [isEnding, setIsEnding] = useState(swiper.isEnding)

    useEffect(() => {
        swiper.on("slideChange", function(){
            setIsEnding(swiper.isEnding);
        })
    }, [])

    return(
        <div className={styles.rightNavigation}>
            {!isEnding && <RightArrow onClick={() => swiper.slideNext()} />}

        </div>
    )
}