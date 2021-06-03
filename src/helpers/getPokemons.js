
export const getPokemons = async(id)=>{

    const rango = id
    const url= `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${rango}`

    try{
      const resp = await fetch(url);
      const {results} = await resp.json()

      let pokemons = await Promise.all(
        results.map( async img=>{
          const info = await fetch (img.url)
          const infoJson = info.json()
          const imagen = await infoJson
          return {
            name:img.name,
            imagen: imagen.sprites.other.dream_world.front_default,
            show:false,
            disabled: false,
          }
        })
      )
      return pokemons
    //   console.log(pokemons)

    }catch(error){
      console.log(error)
    }
    
  }