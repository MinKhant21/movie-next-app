import Image from "next/image";

const getMovie =  async() => {
  let res = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=cd47f134&type=series&page=10',{cache:'no-store'})
  return res.json()
}

export default async function Home() {
  let data = await getMovie();
  console.log(data)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <img src={data.Poster} alt="" />
    </main>
  );
}
