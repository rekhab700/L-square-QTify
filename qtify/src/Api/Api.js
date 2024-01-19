import axios from "axios"

// export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";
                                

export const fetchTopAlbums = async () => {
   try{
        const response = await axios ("https://qtify-backend-labs.crio.do/albums/top")
     //    console.log(response.data)
        return response.data;

   } catch(e){
        console.error(e)
   }
}
export const fetchNewAlbums = async () => {
    try{
         const response = await axios ("https://qtify-backend-labs.crio.do/albums/new")
         return response.data;
    } catch(e){
         console.error(e)
    }
 }

 export const fetchSongs = async () => {
    try{
         const response = await axios ("https://qtify-backend-labs.crio.do/songs")
         return response.data;
    } catch(e){
         console.error(e)
    }
 }
 export const fetchFilters = async () => {
    try{
         const response = await axios ("https://qtify-backend-labs.crio.do/genres")
         return response.data;
    } catch(e){
         console.error(e)
    }
 }