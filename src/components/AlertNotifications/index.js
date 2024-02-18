import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'

import './index.css'

const AlertNotifications = props => {
  console.log(props)

  return (
    <div className="main-bg-container">
      <h1 className="main-h1">Alert Notifications</h1>
      <Notification>
        <AiFillCheckCircle className="main-icon1" color="#2dca73" />
        <div className="main-container2">
          <h1 className="success">Success</h1>
          <p className="description">
            You can access all the files in the folder
          </p>
        </div>
      </Notification>

      <Notification>
        <RiErrorWarningFill className="main-icon1" color=" #ff0b37" />
        <div className="main-container2">
          <h1 className="error">Error</h1>
          <p className="description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </Notification>

      <Notification>
        <MdWarning className="main-icon1" color="#ffb800" />
        <div className="main-container2">
          <h1 className="warning">Warning</h1>
          <p className="description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </Notification>
      <Notification>
        <MdInfo className="main-icon1" color=" #0f81e0" />
        <div className="main-container2">
          <h1 className="info">Info</h1>
          <p className="description">
            Anyone on the internet can view these files
          </p>
        </div>
      </Notification>
    </div>
  )
}

export default AlertNotifications
