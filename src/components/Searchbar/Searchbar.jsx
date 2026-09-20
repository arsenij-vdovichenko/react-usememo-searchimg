// import { useState } from "react";

// function Searchbar({ onSearch }) {
// const [query, setQuery] = useState("")

// const handleSubmit = (e) => {
//     e.preventDefault()
//     // console.log(query);
//     onSearch(query)
//     setQuery("")
// }
// return(
//     <>
//   <header className="searchbar">
//     <form className="form">
//       <button type="submit" className="button">
//         <span className="button-label">Search</span>
//       </button>

//       <input
//       onChange={(evt)=>setQuery(evt.target.value)}
//         className="input"
//         type="text"
//         placeholder="Search images and photos"
//       />
//     </form>
//   </header>;
//   </>
//   )
// }

// export default Searchbar;



import { useState } from "react";

function Searchbar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery("");
  };

  return (
    <>
      <header className="searchbar">
        <form className="form" onSubmit={handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={(evt) => setQuery(evt.target.value)}
            className="input"
            type="text"
            placeholder="Search images and photos"
            value={query}
          />
        </form>
      </header>
    </>
  );
}

export default Searchbar;