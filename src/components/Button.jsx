

export default function Button({name,action}) {
  return (
    <div>
      <button className=" px-4 py-2 border text-xl font-semibold rounded-md hover:bg-green-400 active:bg-green-400 bg-green-500 text-white w-full  ">{name}</button>
    </div>
  )
}
