import { useEffect, useState } from "react";

const CatFacts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch("https://catfact.ninja/facts?limit=10");

        if (!response.ok) {
          throw new Error("Something went wrong :(");
        }

        const data = await response.json();

        setFacts(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>I am trying to get the cat facts! give me a moment ! </div>;
  }

  if (error) {
    return <div>Error:{error}</div>;
  }

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1 style={{ color: "#344e41" }}>Cat Facts</h1>
      {facts.map((info, index) => (
        <p
          style={{
            color: "#344e41",
            fontSize: "1rem",
            border: "2px solid #ff006e",
          }}
          key={index}
        >
          {info.fact}
        </p>
      ))}
    </div>
  );
};

export default CatFacts;
