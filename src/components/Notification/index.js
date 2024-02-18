import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  console.log(children)
  return (
    <div className="notification-container">
      <div className="note-con1">{children}</div>
      <GrFormClose className="icon2" />
    </div>
  )
}

export default Notification
