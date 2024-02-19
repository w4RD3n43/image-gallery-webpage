import React, { useContext } from 'react';
import { AppContext } from '../Context/Appcontext';
import Spinner from './Spinner';
import { FaHeart, FaDownload, FaShare } from 'react-icons/fa';
// import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

const Home = () => {
  const {
    loading,
    photos,
    handleFavouriteClick,
    handleShare,
    handleDownload,
    // closeLightbox,
    // openLightbox,
    // isLightboxOpen,
    // lightboxindex
  } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 ml-5 mr-5">
          {photos.map((photo, index) => (
            <div key={photo.id} className=' shadow-2xl hover:cursor-pointer ' >
              <div>
                <div className='flex justify-center items-center ' >
                  <img
                    src={photo.urls.small}
                    alt={photo.alt_description}
                    // onClick={() => openLightbox(index)}
                    className='w-[400px] h-[267px] object-cover '
                    loading="lazy"
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
                  <div className='like-button mx-2 '>
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
          ))}
          {/* {isLightboxOpen && photos[lightboxindex] && (
              <Lightbox
                mainSrc={photos[lightboxindex].urls.full}
                onCloseRequest={closeLightbox}
              />
          )} */}
        </div>
      )}
    </div>
  );
};

export default Home;
