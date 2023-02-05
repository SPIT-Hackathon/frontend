import RCard from '@/components/recommendation/RCard';
import authContext from '@/hooks/AuthContext/authContext';
import dataContext from '@/hooks/DataContext/dataContext';
import React, { useContext, useEffect } from 'react'
import styles from "../styles/Rcard.module.css"

function Recommendations() {
    const { user } = useContext(authContext);
    const { recommendations, getRecommendations } = useContext(dataContext);

    useEffect(() => {
        getRecommendations(!user?{
            user_id:"63de27591b3aeb4a4f567218"
        }:user);
    }, []);
    return (
        <div className={styles.recc}>
        
            <div className={styles.data}>
            {recommendations?.map((recommendation, key) =>
                <RCard data={recommendation} />)}
            </div>
        </div>
    )
}

export default Recommendations