import axios from "axios";

// Fetch API data
const fetchData = async (apiURL) => {
  try {
    const { data } = await axios.get(apiURL); // destructure the data from our response
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default fetchData;
