import { useState } from "react";
import "./styles.css";

const App = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5")
      .then((response) => response.json())
      .then((json) => setData(json));
  };
  return (
    <>
      <button className="btn" onClick={getData}>
        Get Data
      </button>
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>USERID</th>
              <th>ID</th>
              <th>TITLE</th>
              <th>BODY</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </>
  );
};
export default App;
