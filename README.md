This project is a React application that utilizes context and hooks to manage state and handle interactions with an API. Here's a description of its key features:

State Management: It uses the useState hook to manage various states, including loading state, photo data, favourite photos, lightbox state, search query, search text, and pagination.

Context API: It utilizes the React Context API (createContext) to provide a global state for components within the app.

Form Handling: It includes functions (changeHandler and handleSubmit) to manage form input for searching photos.

Lightbox: It provides functionality (openLightbox and closeLightbox) to open and close a lightbox for viewing images in full size.{
  Lightbox has to be removed due to version conflict
}

Favourites Logic: It allows users to add and remove photos from their list of favourite photos (handleFavouriteClick).

Image Sharing: It includes a function (handleShare) to share the URL of a photo via WhatsApp.

Image Downloading: It provides functionality (handleDownload) to download a photo when clicked.

API Calling: It uses fetch to call the Unsplash API to fetch photos based on search queries and pagination.

Scrolling Behavior: It includes a scroll event listener to implement infinite scrolling when reaching the bottom of the page (handleScroll).

Resetting Scroll Position: It includes a useEffect hook to reset the scroll position to the top when new photos are loaded (useEffect(() => { window.scrollTo(0, 0); }, [photos]);).

Overall, this project demonstrates how to create a responsive image gallery with features like searching, favoriting, and lightbox view, using React and Tailwind CSS for styling.