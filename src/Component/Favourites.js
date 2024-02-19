import React, { useContext } from 'react'
import { AppContext } from '../Context/Appcontext'
import { FaHeart, FaDownload, FaShare } from 'react-icons/fa';
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';
const Favourites = () => {
  const {
    loading,
    photos,
    handleFavouriteClick,
    handleShare,
    handleDownload,
    // closeLightbox,
    // openLightbox,
    // isLightboxOpen,
    // lightboxindex,
    favouritePhotos
  } = useContext(AppContext);
  return (
    <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ml-5 mr-5">
      {
        favouritePhotos.map((photo, index)=>{
          return (
            <div >
              <div key={photo.id} className=' shadow-2xl hover:cursor-pointer ' >
              <div>
                <div>
                  <img
                    src={photo.urls.small}
                    alt={photo.alt_description}
                    // onClick={() => openLightbox(index)}
                    className='w-[400px] h-[267px] object-cover '
                  />
                </div>
                <div className='flex justify-between items-center'>
                <div className='m-2  flex items-center '>
                  <a href= {photo.user.portfolio_url} >
                    <img src= {photo.user.profile_image.small} alt='Profile' className=' rounded-full' />
                  </a>
                  <p className='font-bold mx-2'>{photo.user.name}</p>
                </div>
                <div className='flex flex-row items-center'>
                  <button className='' onClick={() => handleShare(photo.urls.full)}>
                    <FaShare />
                  </button>
                  <button className="m-5" onClick={() => handleFavouriteClick(photo.id)}>
                    <FaHeart />
                  </button>
                  <button onClick={() => handleDownload(photo.urls.full, photo.id)}>
                    <FaDownload />
                  </button>
                  <div className="flex flex-row justify-center items-center mx-2">
                  <div className='mx-2'>
                  <FaHeart />
                  </div>
                  <p>
                  {photo.likes}
                  </p>
                  </div>
                </div>
                </div>
              </div>
            </div>
            
              {/* {isLightboxOpen && photos[lightboxindex] && (
              <Lightbox
                mainSrc={photos[lightboxindex].urls.full}
                onCloseRequest={closeLightbox}
              />
          )} */}
            </div>
            
          )
        })
      }
    </div>
  )
}

export default Favourites
