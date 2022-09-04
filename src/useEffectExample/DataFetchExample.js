import { useState, useEffect } from "react";

const FetchData = () => {
    const [data, setData] = useState({});
    const getData = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                setData(prevData => ({ ...prevData, ...result }));
            });
    }
    useEffect(() => {
      getData('https://ergast.com/api/f1/2008/5/results.json');
    }, []);

    return <div>
        <button onClick={() => getData(`https://ergast.com/api/f1/200${Math.floor(Math.random()*10)}/5/results.json`)}>Fetch data</button>
        <div className="format-json">
            <pre>{data ? `Data: ${JSON.stringify(data, null, 2)}` : ''}</pre>
        </div>
    </div>;
}

export default FetchData;