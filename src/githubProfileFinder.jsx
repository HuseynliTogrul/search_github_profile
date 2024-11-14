// import React, { useEffect, useState } from 'react'

// const githubProfileFinder = () => {
//     const [userName, setUserName] = useState("HuseynliTogrul");

//     async function fetchGithubUserData() {
//         const res = await fetch(`https://api.github.com/users/${userName}`);
//         const data = await res.json();
//         console.log(data);
//     }

//     useEffect(() => {
//         fetchGithubUserData();
//     }, []);

//     function handleSubmit() { }

//     return (
//         <div className="github-profile-container">
//             <div className="input-wrapper">
//                 <input
//                     name="search-by-username"
//                     type="text"
//                     placeholder="Search Github Username..."
//                     value={userName}
//                     onChange={(event) => setUserName(event.target.value)}
//                 />
//                 <button onClick={handleSubmit}>Search</button>
//             </div>
//         </div>
//     );
// }

// export default githubProfileFinder