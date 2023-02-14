export default function Footer({ stands }) {
  return (
    <footer className='flex items-center justify-between p-4 bg-gray-400 text-gray-50'>
      <p className='m-auto'>{stands.length} Locations World Wide</p>
    </footer>
  )
}
