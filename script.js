const appId = '64c02864'
const appKey = '613ab26279e072578771d3830dfba6b3'
const query = 'pizza'

const input = document.querySelector('input')
const button = document.querySelector('button')
const recipeContainer = document.querySelector('.recipe-container')

const generateRecipeCard = ({title,imageUrl,recipeUrl,ingredientsArray})=>` 
<div class="max-w-sm min-w-1/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img style="height:250px" class="rounded-t-lg w-full" src="${imageUrl}" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 ">${
          ingredientsArray.length > 0 && ingredientsArray.slice(0,5).join(' ⚪️ ')
        }</p>
        <a target="_blank" href="${recipeUrl}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
`

const searchRecipe = async () => {
  try {
     // Disable  the  button  and  update  its  text  during  the  search
     button.disabled = true;
     button.textContent = 'Searching...';

     // Get the user's input value and construct the API URL
     const query = input.value;
     const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`;

     // Make a fetch request to the API
     const response = await fetch(url);
     const data = await response.json();

     // Log the API response data
     console.log(data);

  } catch (error) {
     // Log any errors that occur during the fetch operation
     console.log(error);
  } finally {
     // Re-enable the button and restore its original text
     button.disabled = false;
     button.textContent = 'Search';
  }
};

button.addEventListener('click', searchRecipe)