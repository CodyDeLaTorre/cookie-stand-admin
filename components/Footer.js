export default function Footer(props) {
  return (
    <footer className='flex items-center justify-between p-4 bg-gray-400 text-gray-50'>
      <p>{props.locations.length} Locations World Wide</p>
    </footer>
  )
}
