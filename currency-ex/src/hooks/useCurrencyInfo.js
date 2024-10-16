import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok " + res.statusText);
                }
                return res.json();
            })
            .then((res) => setData(res.rates))
            .catch((err) => console.error("Failed to fetch currency data:", err));
    }, [currency]);

    console.log(data);
    return data;
}

export default useCurrencyInfo;
