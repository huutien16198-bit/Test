import axios from 'axios';

async function test() {
  try {
    const res = await axios.get('https://www.googleapis.com/customsearch/v1?q=dog&cx=57767f3f3c7ba4b09&key=AIzaSyAZSIZKq2YWoGtDIL138mW-hG9lMiQdAg4&searchType=image&num=1');
    console.log(JSON.stringify(res.data, null, 2));
  } catch (e: any) {
    console.log(JSON.stringify(e.response?.data || e.message, null, 2));
  }
}

test();
