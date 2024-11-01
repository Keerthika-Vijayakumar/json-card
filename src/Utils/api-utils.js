class APIService {
    static getInstance() {
        if (!APIService.instance) {
            APIService.instance = new APIService();
        }
        return APIService.instance;
    }

    getCardsJson() {
        const apiEndPoint = "https://www.reddit.com/r/reactjs.json";

        return fetch(apiEndPoint).then((response) => {
            if (response.status !== 200) {
                throw new Error('Error in getting JSON');
            }
            return response.json();
        }).then(res => {
            return res;
        }).catch((err) => {
            return Promise.reject(err);
        });
    }
}

export default APIService;