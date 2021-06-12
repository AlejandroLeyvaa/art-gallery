export async function getData(API) {
  try {
    const response = await fetch(API);
    const data = response.json();
    console.log(data, 'Response');
    if(typeof data.data === 'string') {
      alert(data.data);
      return data.data;
    }
    return data;
  } catch (error) {
    console.log('Fetch error');
  }
}
