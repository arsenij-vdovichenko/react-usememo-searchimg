// import { useState, useEffect } from "react";
// import ImageGallery from "./components/ImageGallery/ImageGallery";
// import "./App.css";
// import Searchbar from "./components/Searchbar/Searchbar";
// import { fetchImages } from "./api";

// function App() {
//   const [query, setQuery] = useState("");
//   const [page, setPage] = useState(1);
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     if (!query) {
//       return;
//     }
//     setLoading(true);
//     fetchImages(query, page)
//       .then((res) => {
//         setImages(res.hits);
//       })
//       .finally(() => setLoading(false));
//   }, [query, page]);
//   const handleSearch = (text) => {
//     setQuery(text);
//     setPage(1);
//   };
//   return (
//     <>
//       {" "}
//       <Searchbar onSearch={handleSearch} /> {loading && <Loader />}{" "}
//       <ImageGallery images={images} />{" "}
//     </>
//   );
// }
// export default App;



// import { useState, useEffect } from "react";
// import "./App.css";
// import Searchbar from "./components/Searchbar/Searchbar";
// import { fetchImages } from "./api";
// import ImageGallery from "./components/ImageGallery/ImageGallery";
// import Loader from "./components/Loader/Loader";


// function App() {
//   const [query, setQuery] = useState("");
//   const [page, setPage] = useState(1)
//   const [images, setImages] = useState([])
//   const [loading, setLoading] = useState(false)

//   useEffect(()=>{
//     if(!query){
//       return
//     }
//     setLoading(true)
//     fetchImages(query, page).then(res => {
//       // setImages(res.hits)
//       setImages(prevImages => [...prevImages, ...res.hits]);
//     }).finally(()=>setLoading(false))
//   }, [query, page])

//   const handleSerch = (text) => {
//     setQuery(text);
//     // setPage(1)
//   };

// const loadMore = ()=>{
//   // setPage(prev => prev+1)
//   setPage(1);
// setImages([]);
// }


// console.log(images);


//   return (
//     <>
//       <Searchbar onSearch={handleSerch} />
//       {loading&&<Loader />}
//       <ImageGallery images={images} />
//       {images.length>0&&<Button/>}
//     </>
//   );
// }

// export default App;




import { useState, useEffect } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import { fetchImages } from "./api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    setLoading(true);

    fetchImages(query, page)
      .then((res) => {
        setImages((prevImages) => [...prevImages, ...res.hits]);
      })
      .finally(() => setLoading(false));
  }, [query, page]);

  const handleSerch = (text) => {
    setQuery(text);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Searchbar onSearch={handleSerch} />
      {loading && <Loader />}
      <ImageGallery images={images} />
    </>
  );
}

export default App;