import React, {useEffect, useState} from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css"
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel"
import Filters from "../Filters/Filters"

export default function Section({title, data, filterSource, type}){
   
    const [filters, setFilters] = useState([{key: "all", label: "all"}]);
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
    const [carouselData, setCarouselData] = useState(false);
    

    const handleToggle = () => {
        setCarouselData(prevState => !prevState)
    }

    useEffect(() => {
        if(filterSource){
            filterSource().then((response) => {
                const {data} = response;
                setFilters([...filters, ...data])
            })
        }
    }, [])

    const showFilters = filters.length > 1;
    const cardsToRender = data.filter((card) => 
        showFilters && selectedFilterIndex !== 0 ?
        card.genre.key === filters[selectedFilterIndex].key : card)

    return (
        <div>
        <div className={styles.header}>
            <h3>{title}</h3>
           <h4 className={styles.toggleText} onClick={handleToggle}>{!carouselData ? "Collapse All" : "Show All"}</h4>
        </div>
        {showFilters && (
            <div className={styles.filterWrapper}>
                <Filters 
                    filters={filters}
                    selectedFilterIndex={selectedFilterIndex}
                    setSelectedFilterIndex={setSelectedFilterIndex}
                />
            </div>)}

       {data.length === 0? (
            <CircularProgress />
        ) : (
            <div className={styles.cardWrapper}>
                {!carouselData ? 
                    (
                    <div className={styles.wrapper}>
                        {cardsToRender.map((ele) => <Card data={ele} type={type} />)}
                    </div>
                    ) 
                    :
                    (
                        <Carousel 
                            data={cardsToRender}
                            renderedComponent={(data) => <Card data={data} type={type} />}
                        />
                    )
                }            
            </div>
        )} 
        </div>
    )
}
