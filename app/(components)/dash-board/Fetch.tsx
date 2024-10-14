import axios from 'axios';

interface Props {
  id: any;
  image: any;
  name: String;
  price: String;
}

  async function fetchDetails() {
    try {
      const response = await axios.get('https://670825ed8e86a8d9e42e355b.mockapi.io/products/featuredProducts');
      const data = response.data as {
        id: any;
        image: any;
        name: String;
        price: String;
      }[];
      console.log('Fetched data:', data);
      return data; 
    } catch (error) {
      console.error(error);
      return []; 
    }
}
export default fetchDetails