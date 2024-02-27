type Props = {}
const Page = ({ params }: { params: { page: string } }) => {
  return (
    <div>
      <p className='text-3xl capitalize'>{params.page}</p>
    </div>
  )
}
export default Page
