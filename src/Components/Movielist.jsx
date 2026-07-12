import Moviecart from "./Moviecart";

const Movielist=({title,movies})=>{
  console.log(movies);
    if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-2">
      <h1 className="text-2xl font bold text-white m-2">{title}</h1>
    <div className="flex overflow-x-scroll space-x-3 hide-scrollbar" >
   
    <div className="flex hide-scrollbar" >
    {movies.map(movie=> <Moviecart key={movie.id} posterPath={movie.poster_path}/>)}
         </div>
  </div>
  </div>
  )
}
export default Movielist;