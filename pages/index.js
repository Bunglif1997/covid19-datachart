import useSWR from 'swr';
import fetch from 'unfetch';
import DataTable from 'react-data-table-component';






const apiUrl = 'https://api.covid19api.com/summary';
const timeSeriesUrl = 'https://pomber.github.io/covid19/timeseries.json';
const fetcher = url => fetch(url).then(r => r.json());
//const fetcher = url => axios.get(url)

import columns from '../components/Datatablecolumns';
import DataChart from '../components/DataChart';
import TimeSeriesChart from '../components/TimeSeriesChart';


const IndexPage = () => {
    const { data, error } = useSWR(apiUrl, fetcher);
    const { data: timeseries } = useSWR(timeSeriesUrl, fetcher);
 


    if (!data) {
        return <p> Not found </p>
    }
    if (error) {
        return <p> Error...</p>
    }
    return (
        <div className="container">
            <style jsx>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Grandstander:wght@100&display=swap');
                *{
                    font-family: 'Fjalla One', sans-serif;
                }
                .container {
                    width: 820px;
                    margin: 0 auto;
                }
                .title {
                    text-align: center;
                }
                `}

            </style>
            <h1 className="title ">
                Covide-19 DEV.
                </h1>
            <DataTable
                title="COVID-19 Summary"
                columns={columns}
                data={data.Countries}
                pagination={true}
            />
            <DataChart data={data.Countries} title= 'Summary' />
            <TimeSeriesChart data={timeseries.Thailand} title= 'Thailand Summary' />

        </div>
    );
};

export default IndexPage;   