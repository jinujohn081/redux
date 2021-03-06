import { useSelector } from 'react-redux'

const Footer = () => {
  const color = useSelector((state) => state.color.value)
  return (
    <div className='footer'>
      <h2 style={{ color }}>@Copyright Redux-app</h2>
    </div>
  )
}

export default Footer
