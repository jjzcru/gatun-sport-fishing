import { useEffect, useState } from "react";

/**
 * React hooks that gets the webpage data based on their browser language
 *
 */
export function useData(): { data: any; error: any } {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    let language = "es";
    if (navigator?.language?.includes("en")) {
      language = "en";
    }
    let url = `/api/data?lang=${language}`;
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      })
      .catch((e) => setError(e));
  }, []);
  return {
    data,
    error,
  };
}
