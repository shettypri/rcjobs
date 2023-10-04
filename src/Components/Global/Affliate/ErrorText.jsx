

const ErrorText = ({text}) => {
  return (
    <section className="px-4 bg-red-200 text-red-600 py-2 flex">
      <section className="mx-auto font-bold">{text}</section>
    </section>
  )
}

export default ErrorText
