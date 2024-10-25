// fetchUser function
export async function fetchUser() {
  try {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((res) => console.log(res));
  } catch (error) {
    console.log(`Hata: ${error}`);
  }
}
// export statement
// api call
// fetching data asynchronously
// error handling
/*
// other improvements like:
export async function fetchUser() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Hata: ${error}`);
  }
}
// HTTP errors status

export async function fetchUser() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Hata: ${error}`);
  }
}
*/
