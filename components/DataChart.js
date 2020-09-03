import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default ({ data, title }) => {
    return (
        <>
    <h2>{title}</h2>
        <ResponsiveContainer width="100%" height={500}>
        <LineChart width={2000} height={800} data={data}>
            <XAxis dataKey="Country" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="NewConfirmed" stroke="blue" />
            <Line type="monotone" dataKey="TotalConfirmed" stroke="orange" />
            <Line type="monotone" dataKey="NewDeaths" stroke="yellow" />
            <Line type="monotone" dataKey="TotalDeaths" stroke="red" />
            <Line type="monotone" dataKey="TotalRecovered" stroke="Green" />
            <Tooltip />
        </LineChart>
        </ResponsiveContainer>
        </>
    );
};