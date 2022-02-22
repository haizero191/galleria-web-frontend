import unsplashApi from "../../api/unsplash/unsplashApi"



class Unsplash {
    get = async(perPage, page, search) =>  {
        const response = await unsplashApi.get(`https://api.unsplash.com/search/photos?per_page=${perPage}&page=${page}&query=${search}`);
        return response.data.results;
    }  
    getOneImage = async(id) => {
        const response = await unsplashApi.get(`https://api.unsplash.com/photos/${id}`);
        return response;
    }


    getUser = async(username) => {
        const response = await unsplashApi.get(`https://api.unsplash.com/users/ashbot/likes`);
        return response;
    }

    // login = async() => {
    //     const response = await unsplashApi.post(`https://unsplash.com/oauth/authorize?redirect_uri=http://localhost:3000/search&scope=public+read_user`);
    //     return response;
    // }
}



export  default new Unsplash();
