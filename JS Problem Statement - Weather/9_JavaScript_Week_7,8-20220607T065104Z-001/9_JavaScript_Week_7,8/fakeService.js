fetch("https://fakestoreapi.com/products").
then(data=>data.json()).
then(data=>console.log(data)).
catch(error=>console.log(error))