export default function Page({ params }: { params: { date: string } }) {
    return <div>My Post: {params.date}</div>
  }