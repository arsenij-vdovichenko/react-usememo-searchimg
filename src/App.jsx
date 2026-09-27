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




import { useState, useEffect, useCallback, useReducer } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import { fetchImages } from "./api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal"

// function App() {
//   // const [query, setQuery] = useState("");
//   // const [page, setPage] = useState(1);
//   const [images, setImages] = useState([]);
//   // const [loading, setLoading] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null)


// const initialState = {
//   query: "",
//   page: 1,
//   images: [],
//   loading: false
// }

// function reducer(state, action){
//   switch(action.type){
//     case "SET_QUERY":
//       return{
//         ...state,
//         query: action.payload,

//       }

//       case "SET_LOADING":
//         return {
//           ...state,
//           loading: action.payload,
//         }

//         case "SET_PAGE":
//         return {
//           ...state,
//           page: action.payload,
//         }

//         case "SET_IMAGES":
//         return {
//           ...state,
//           images: action.payload,
//         }

//       default:
//         return state
//   }
// }

// const [state, dispatch] = useReducer(reducer, initialState)






//   useEffect(() => {
//     if (state.query) {
//       return;
//     }

//     // setLoading(true);

//     dispatch({
//       type: "SET_LOADING",
//       payload:true
//     })

//     fetchImages(state.query, state.page)
//       .then((res) => {
//         // setImages((prevImages) => [...prevImages, ...res.hits]);
//       })
//       .finally(() => dispatch(false));
//       type: "SET_LOADING",
//       payload
//   }, [state.query, state.page]);

//   const handleSerch = (text) => {
//     // setQuery(text);

//     dispatch({
//       type: "SET_QUERY",
//       payload:text,
//     })

//     dispatch({
//       type: "SET_PAGE",
//       payload:1,
//     })

    
//     setImages([]);
//   };


//   const loadMore = useCallback(()=>{
//     // setPage((prev) => prev + 1)
//     dispatch({
//       type: "SET_PAGE",
//       payload:(prev) => prev + 1,
//     })
//   },[])



//   const handleImageClick = (url)=>{
//     setSelectedImage(url)
//   }

//   const closeModal=()=>{
//     setSelectedImage(null)
//   }

//   return (
//     <>
//       <Searchbar onSearch={handleSerch} />
//       {loading && <Loader />}
//       <ImageGallery images={state.images} onImageClick={handleImageClick}/>
//       {state.images.length>0 && <Button onClick={loadMore}/>}
//       {selectedImage && <Modal onImageUrl={selectedImage} onClose={closeModal}/>}
//     </>
//   );
// }

// export default App;


function App() {
  const initialState = {
    query: "",
    page: 1,
    images: [],
    loading: false,
    selectImage: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "SET_QUERY":
        return {
          ...state,
          query: action.payload,
        };

      case "SET_LOADING":
        return {
          ...state,
          loading: action.payload,
        };

      case "SET_PAGE":
        return {
          ...state,
          page: action.payload,
        };

      case "SET_IMAGES":
        return {
          ...state,
          images: action.payload,
        };

      case "SEARCH":
        return {
          ...state,
          query: action.payload,
          page: 1,
          images: [],
        };

      case "SET_SELECTIMAGE":
        return {
          ...state,
          selectImage: action.payload,
        };

      default:
        return state;
    }
  }

  useEffect(() => {
    if (!state.query) {
      return;
    }
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    fetchImages(state.query, state.page)
      .then((res) => {
        dispatch({
          type: "SET_IMAGES",
          payload: [...state.images, ...res.hits],
        });
      })
      .finally(() =>
        dispatch({
          type: "SET_LOADING",
          payload: false,
        }),
      );
  }, [state.query, state.page]);

  const handleSearch = (text) => {
    dispatch({
      type: "SEARCH",
      payload: text,
    });
  };

  const loadMore = useCallback(() => {
    dispatch({
      type: "SET_PAGE",
      payload: state.page + 1,
    });
  }, [state.page]);

  const handleImageClick = (url) => {
    dispatch({
      type: "SET_SELECTIMAGE",
      payload: url,
    });
  };

  const closeModal = () => {
    dispatch({
      type: "SET_SELECTIMAGE",
      payload: null,
    });
  };

  return (
    <>
      <Searchbar onSearch={handleSearch} />
      {state.loading && <Loader />}
      <ImageGallery images={state.images} onImageClick={handleImageClick} />
      {state.images.length > 0 && <Button onClick={loadMore} />}
      {state.selectImage && (
        <Modal onClose={closeModal} onImageUrl={state.selectImage} />
      )}
    </>
  );
}

export default App;