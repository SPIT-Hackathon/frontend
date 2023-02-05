import RCard from '@/components/recommendation/RCard';
import authContext from '@/hooks/AuthContext/authContext';
import dataContext from '@/hooks/DataContext/dataContext';
import React, { useContext, useEffect } from 'react'

function Recommendations() {
    const { user } = useContext(authContext);
    const { recommendations, getRecommendations } = useContext(dataContext);

    useEffect(() => {
        getRecommendations(user);
    }, []);
    return (
        <div>
            {recommendations?.map((recommendation, key) =>
                <RCard data={recommendation} />)}
        </div>
    )
}

export default Recommendations