import { useEffect, useState } from 'react';

type API = {
  count: string;
  entries: {
    API: string;
    Description: string;
    Auth: string;
    HTTPS: boolean;
    Cors: string;
    Link: string;
    Category: string;
  }[];
};

export function BasicUseEffect() {
  const [data, setData] = useState<API | null>(null);
  useEffect(() => {
    fetch('https://api.publicapis.org/entries')
      .then((res) => res.json())
      .then((data: API) => {
        // take only first 5.
        const entries = data.entries.slice(0, 5);
        data.entries = entries;
        setData(data);
      });
  });
  return (
    <div>
      UseEffect
      <ol className="basic_use_effect">
        {data?.entries.map((element) => {
          return <option>{element.Description} </option>;
        })}
      </ol>
    </div>
  );
}
