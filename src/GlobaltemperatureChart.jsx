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


const GlobalTemperature = () => {
      // Två statevariabler för att lagra diagramdata och laddningsstatus
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => { // useEffect för att utföra datahämtning vid första rendering
        const fetchData = async () => { // Hämtar och bearbetar data från en JSON-fil genom en asynkron funktion
            try {
                 // Hämtar data från JSON-filen
                const response = await fetch('Dataset2_Global Temperature Time Series.json');
                const result = await response.json();

                  // Formar datan så den passar för Recharts
                const formattedData = result.map((item) => ({
                    // Visar år och temperatur
                    year: item.Year,
                    temperature: item.Mean,
                }));
                // Uppdaterar state med den formade datan och gör att den inte laddas längre
                setData(formattedData);
                setLoading(false);
            } catch (error) {
                // Loggar eventuella fel
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData(); // Anropar funktionen
    }, []);

    if (loading) return <p>Loading...</p>; // När data hämtas och laddas visas detta meddelande
    // Returnerar linjediagram med hämtade datan. Diagrammet är från Recharts
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>

    );
};

export default GlobalTemperature;