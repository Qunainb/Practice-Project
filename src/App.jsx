import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();

        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h2 className="topHeading">My Store</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="neww">
        {data.map((data) => (
          <div key={data.id}>
            <div className="bodyMain">
              <h5>{data.title}</h5>
              <p>{data.description}</p>
              <img src={data.image} className="imgMain" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
