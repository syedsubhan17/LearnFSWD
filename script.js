const appId = '64c02864'
const appKey = '613ab26279e072578771d3830dfba6b3'
const query = 'pizza'

const input = document.querySelector('input')
const button = document.querySelector('button')

const searchRecipe = async()=>{
    try {
    button.disabled = true
    button.textContent = 'Searching...' //this will show searchin.... when hit hte button

    const query = input.value
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  }
  catch (error) {
    console.log(error)
  }
  finally{
    button.disabled = false
    button.textContent = 'Search'

  }
  
}

button.addEventListener('click', searchRecipe)