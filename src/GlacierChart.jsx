import React, { useState, useEffect } from 'react';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'; // Importerar diagram från Recharts

const GlacierChart = () => {
    // Två statevariabler för att lagra diagramdata och laddningsstatus
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => { // useEffect för att utföra datahämtning vid första rendering
        const fetchData = async () => { // Hämtar och bearbetar data från en JSON-fil genom en asynkron funktion
            try {
                // Hämtar data från JSON-filen
                const response = await fetch('Dataset3_Glaciers Size.json');
                const result = await response.json();

                // Formar datan så den passar för Recharts
                const formattedData = result.map((item) => ({
                    // Visar år och mass balance
                    year: item.Year,
                    mass_balance: item['Mean cumulative mass balance'],
                }));
                // Uppdaterar state med den formade datan och gör att den inte laddas längre
                setData(formattedData);
                setLoading(false);
                // Loggar eventuella fel
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>; // När data hämtas och laddas visas detta meddelande
    // Returnerar linjediagram med hämtade datan. Diagrammet är från Recharts

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <Line type="monotone" dataKey="mass_balance" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>

    );
};

export default GlacierChart;