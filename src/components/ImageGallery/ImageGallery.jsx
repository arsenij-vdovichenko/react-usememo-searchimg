// import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"

// function ImageGallery({images}){

//     return (<>
//         <ul>{images.map((img)=>{
//             return <ImageGalleryItem key={img.id} img={img}/>
//         })}</ul>

//     </>)
// }

// export default ImageGallery


// import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

// function ImageGallery({ images }) {
//   return (
//     <>
//       <ul>
//         {images.map((img) => {
//           return <ImageGalleryItem key={img.id} img={img} />;
//         })}
//       </ul>
//     </>
//   );
// }

// export default ImageGallery




import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images,onImageClick }) {
  return (
    <>
      <ul>
        {images.map((img) => {
          return <ImageGalleryItem key={img.id+String(Math.random())} img={img} onImageClick={onImageClick}/>;
        })}
      </ul>
    </>
  );
}

export default ImageGallery;