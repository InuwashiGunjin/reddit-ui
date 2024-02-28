import Home from '../page'

type Props = {}
const Page = ({ params }: { params: { page: string } }) => {
  return (
    <div>
      {/* <p className='text-3xl capitalize'>{params.page}</p> */}
      <Home currentPage={params.page} />
    </div>
  )
}
export default Page
