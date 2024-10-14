import axios from 'axios';



  async function fetchDetails() {
    try {
      const response = await axios.get('https://670825ed8e86a8d9e42e355b.mockapi.io/products/featuredProducts');
      const data = response.data as {
        id: string;
        image: string;
        name: string;
        price: string;
      }[];
      console.log('Fetched data:', data);
      return data; 
    } catch (error) {
      console.error(error);
      return []; 
    }
}
export default fetchDetails