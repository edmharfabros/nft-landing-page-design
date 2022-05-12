

const BackdropComponent = ({ isOpen }) => {
  return <div className={`${isOpen ? `inline` : `hidden`} bg-black opacity-75 z-40 w-full h-full absolute top-0 left-0`}>
  </div>
}

export default BackdropComponent