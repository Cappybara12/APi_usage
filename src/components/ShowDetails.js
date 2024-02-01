// src/components/ShowDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchShowDetails } from '../api/api';

const ShowDetails = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        const fetchShowData = async () => {
            try {
                const data = await fetchShowDetails(id);
                setShow(data);
            } catch (error) {
                console.error(`Error fetching details for show with ID ${id}:`, error);
            }
        };
        fetchShowData();
    }, [id]);

    return (
        <div>
            {show && (
                <div>
                    <h2>{show.name}</h2>
                    <p>{show.summary}</p>
                    {/* Add booking form here */}
                </div>
            )}
        </div>
    );
};

export default ShowDetails;
