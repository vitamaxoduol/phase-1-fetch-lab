


// const gameOfThronesUrl = `https://anapioficeandfire.com/api/characters/583`
// // function to fetch all the Game of Thrones
// function fetchBooks() {
//   // To pass the tests, don't forget to return your fetch!
//   fetch(gameOfThronesUrl, {
//     method: 'GET',
//     headers: {
//       "Content-Type": 'application/json'
//     }
//   }).then((response) => response.json())
//     .then((data) => { 
// 	console.log(data) 
// 	})

// 	.catch((error) => {
// 		console.log(error);
// 	})
// }
// fetchBooks();

// or

// async function fetchBooks() {
// try {
//   const response = await fetch(gameOfThronesUrl, {
//     method: 'GET',
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//   const result = await response.json();
// // Call renderBooks function with the result
//     renderBooks(result);

//   } catch (error) {
//     console.log(error);
//   }
// }

function fetchBooks() {
	// Define the URL for the Game of Thrones API
	const gameOfThronesUrl = 'https://anapioficeandfire.com/api/books';
	
	// Fetch data from the API
	return fetch(gameOfThronesUrl)  // Don't forget to return the fetch!
	  .then(response => response.json()) // Convert the response to JSON
	  .then(data => renderBooks(data))   // Call renderBooks() with the data as an argument
	  .catch(error => console.error('Error fetching data:', error)); // Log any errors
  }
  
  function renderBooks(books) {
	const main = document.querySelector('main');
	books.forEach(book => {
	  const h2 = document.createElement('h2');
	  h2.innerHTML = book.name;
	  main.appendChild(h2);
	});
  }
  
  document.addEventListener('DOMContentLoaded', function() {
	fetchBooks();
  });