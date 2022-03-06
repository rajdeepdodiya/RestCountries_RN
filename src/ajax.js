
export default{
    async fetchCountries(){

        try{
            const response = await fetch('https://restcountries.com/v2/all');
            const responseJSON = response.json();
            return responseJSON;
        }
        catch(error){
            console.log(`Encountered error while fetching data: ${error.message}`);
            throw(error);
        }
    }
}