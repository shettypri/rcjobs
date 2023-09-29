

const SwipeLoader = () => {
  return (
    <div className="h-screen bg-white">
    <div className="flex justify-center items-center h-full flex-col">
      <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
      <section className="font-bold text-gray-600 px-4">
        Loading...
      </section>
    </div>
  </div>
    )
}

export default SwipeLoader
