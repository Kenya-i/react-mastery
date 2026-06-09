import { useEffect, useState } from "react";

export const useFetch = () => {
    const [fetchState, setFetchState] = useState({status: "loading"});
    
      useEffect(() => {
        fetch('https://dummyjson.com/users')
        .then(res => {
            if (!res.OK) throw new Error("取得に失敗しました。");
            return res.json();
        })
        .then((date) => setFetchState({status: "ok", date}))
        .catch((err) => setFetchState({status: "error", message: err.message}));
      }, []);

      return fetchState;
}