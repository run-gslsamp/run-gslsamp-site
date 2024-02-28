'use client'

import { dateConvert, timeConvert } from './dateTime'
import React, { useState, useEffect } from 'react';

export default function EventCard({ isUpcoming, location="location", description="description", link="link", linkName="Link Name" }) {
    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState(null);
    const [showDescriptions, setShowDescriptions] = useState([]);

    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {
        fetch('/api/events')
            .then((response) => response.json())
            .then((result) => {
                if (isUpcoming) {
                    setLoading(false);
                    setEvents(result.resultPres.filter((event) => event.date >= today));
                } else {
                    setLoading(false);
                    setEvents(result.resultPres.filter((event) => event.date < today));
                }
                // Initialize showDescriptions array with false values for each event
                setShowDescriptions(Array(result.resultPres.length).fill(false));
            })
            .catch((error) => {
                setLoading(false);
                console.log('Error:', error);
            });
    }, []);

    const toggleDescription = (index) => {
        // Toggle the value for the clicked event index
        setShowDescriptions((prev) => {
            const updatedDescriptions = [...prev];
            updatedDescriptions[index] = !updatedDescriptions[index];
            return updatedDescriptions;
        });
    };

    return (
        <div className="">
            {loading ? (
                <p>Loading...</p>
            ) : events === null ? (
                <p className="text-lg">Events being planned, come back soon!</p>
            ) : (
                events.map((e, index) => (
                    <div className="max-w-[20rem]" key={index}>
                        <div className="m-[1rem]">
                            <h3 className="rounded-t-xl bg-[#9D1739] text-white rounded-t-sm text-center font-bold px-[1rem] py-[.5rem]">{e.title}</h3>
                            <div className="bg-[#F1F1F1] p-[.5rem]">
                                <p className='font-bold'>{timeConvert(e.startTime, e.date)} - {timeConvert(e.endTime, e.date)} | {dateConvert(e.date)}</p>
                                <p>{e.location}</p>
                            </div>
                            {showDescriptions[index] && (
                                <div className="text-black bg-[#F1F1F1] border-t-2 p-[.5rem]">
                                    {e.description}
                                    <div className="flex justify-end">
                                        <button className="bg-[#767676] px-[1rem] py-[.5rem] rounded-lg text-white font-bold">
                                            <a href={link}>{linkName}</a>
                                        </button>
                                    </div>
                                </div>
                            )}
                            <button onClick={() => toggleDescription(index)} className="rounded-b-xl bg-[#D3D3D3] w-full text-black font-bold px-[1rem] py-[.5rem]">
                                {showDescriptions[index] ? 'Hide Details' : 'Show Details'}
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}