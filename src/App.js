import { useEffect, useState } from "react";
import "./App.css";
import User from "./user";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

function App() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  async function fetchGithubUserData() {
    if (!userName.trim()) return;

    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    console.log(data);

    if (data.message === "Not Found") {
      setUserData();
    } else {
      setUserData(data);
    }
    setLoading(false);
    setUserName("");
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      fetchGithubUserData();
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetchGithubUserData();
  }

  const handleDarkLight = () => {
    document.body.classList.toggle("dark-mode");
    setIsDarkMode(!isDarkMode)
  };

  return (
    <div className="github-profile-container">
      <div className="github-profile">
        <div className="darkLight">
          {!isDarkMode ? (
            <div
              onClick={handleDarkLight}
              className="lightIcon"
            >
              <CiLight />
            </div>
          ) : (
            <div
              onClick={handleDarkLight}
              className="darkIcon"
            >
              <FaMoon />
            </div>
          )}
        </div>
        <div className="input-wrapper">
          <input
            className="searchInput"
            type="text"
            placeholder="Search Github Username..."
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            onKeyDown={handleKeyEnter}
          />
          <button
            className="searchBtn"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
      {loading ? (
        <h1>Loading data! Please wait...</h1>
      ) : (
        userData &&
        (userData.error ? <h1>{userData.error}</h1> : <User user={userData} />)
      )}
    </div>
  );
}

export default App;
