// src/components/ShowList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchShows } from '../api/api';
import './ShowList.css'; // Import component-specific styles

const ShowList = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const fetchShowData = async () => {
            try {
                const data = await fetchShows();
                setShows(data);
            } catch (error) {
                console.error('Error fetching shows:', error);
            }
        };
        fetchShowData();
    }, []);

    return (
        <div className="show-list-container">
            <h2>Show List</h2>
            <div className="show-card-container">
                {shows.map(({ show }) => (
                    <div key={show.id} className="show-card">
                        <h3>{show.name}</h3>
                        <Link to={`/show/${show.id}`}>
                            <button>View Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowList;
