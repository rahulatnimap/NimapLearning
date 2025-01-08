const movies = [
    { title : 'a' , year : 2018 , rating : 4.5},
    { title : 'b' , year : 2018 , rating : 4.1},
    { title : 'c' , year : 2018 , rating : 3.5},
    { title : 'd' , year : 2015 , rating : 4.5}
]

function movieFilter(arr  , year , rating){
   const res =   arr.filter((movie) => (movie.year === year && movie.rating >= rating))
   for (let i = 0 ; i < res.length ; i++){
    for (let j = 0 ; j < res.length - i - 1 ; j++){
        if (res[j].rating < res[j + 1].rating) { // Descending order
            // Swap elements
            [res[j], res[j + 1]] = [res[j + 1], res[j]];
        } }
   }
   return res
}



console.log(movieFilter(movies , 2018 , 4));
