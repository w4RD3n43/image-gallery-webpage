import React, { createContext, useEffect, useState } from 'react';


const AppContext = createContext();


const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const [favouritePhotos, setFavouritePhotos] = useState([])
  const [lightboxindex, setlightboxindex] = useState(0)
  const [isLightboxOpen, setIslightboxopen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchText, setSearchText] = useState('')
  const [page, setPage] = useState(2)

//form handlin
  const changeHandler = (e) => {
    setSearchQuery(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchText(searchQuery)
    
  }
//lightbox
  const openLightbox = (index) => {
    setlightboxindex(index)
    setIslightboxopen(true)
  }
  const closeLightbox = () =>{
    setIslightboxopen(false)
  } 
//Favourites logic
  const handleFavouriteClick =(photoId) => {
    const existingIndex = favouritePhotos.findIndex((favPhoto) => favPhoto.id  === photoId)
    if (existingIndex !== -1){
      setFavouritePhotos ((prevFavourites) =>(
        prevFavourites.filter((favPhoto) => favPhoto.id !== photoId)))
    }
    else{
      const photoToAdd = photos.find((photo) => photo.id === photoId) 
      setFavouritePhotos((prevFavourites) => [...prevFavourites,photoToAdd])
    }
    console.log(favouritePhotos)
}
//share Images
  const handleShare = (photoUrl) => {
    const shareUrl = `https://api.whatsapp.com/send?text=
    ${encodeURIComponent(`checkout this Image:  
    ${photoUrl}`)}`
    window.open(shareUrl,'_blank');
  }
//download Images
  const handleDownload = (photoUrl, photoId) => {
    const link = document.createElement('a');
    link.href = photoUrl;
    link.download = `photo_${photoId}.jpg`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

//Api calling
  useEffect(() =>{
    const fetchImages = async () => {
      setLoading(true)
      const mainurl = "https://api.unsplash.com/photos"
      const key = "?client_id=zBV0RaTLsfWahDOZODw70Gn7QtkwSc7_Byh7bPe2v8s"
      let url = mainurl+key
      if(searchQuery){
        url= `https://api.unsplash.com/search/photos/${key}&query=${searchQuery}`
      }
      url += `&page=${page}`
      try{
        const response = await fetch (url)
        const data = await response.json()
        setPhotos(data.results || data)
        setLoading(false)
      }
      catch(error){
        setLoading(false)
        alert("Search another Item")
      }
    }
    fetchImages()
  },[searchText, page])
//scrolling 
    useEffect( ()=>{
  const handleScroll = () =>{
    if(
      !loading &&
      window.innerHeight + window.scrollY 
      >= document.body.scrollHeight - 200 
    ){
      setPage((prevPage)=> prevPage+2)
    }
  }
  window.addEventListener('scroll', handleScroll)
  return() =>{
    window.removeEventListener('scroll', handleScroll)
  }
},[loading])
    useEffect(() => {
  window.scrollTo(0, 0);
}, [photos]);

  const value = {
    loading,
    photos,
    handleFavouriteClick,
    handleShare,
    handleDownload,
    openLightbox,
    closeLightbox,
    isLightboxOpen,
    lightboxindex,
    setSearchQuery,
    changeHandler,
    handleSubmit,
    favouritePhotos
  }


  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
