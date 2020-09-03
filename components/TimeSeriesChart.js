import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default ({ data, title }) => {
    return (
        <>
    <h2>{title}</h2>
        <ResponsiveContainer width="100%" height={500}>
        <LineChart width={2000} height={800} data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="confirmed" stroke="orange" />
            <Line type="monotone" dataKey="deaths" stroke="red" />
            <Line type="monotone" dataKey="recovered" stroke="green" />
            <Tooltip />
        </LineChart>
        </ResponsiveContainer>
        </>
    );
};