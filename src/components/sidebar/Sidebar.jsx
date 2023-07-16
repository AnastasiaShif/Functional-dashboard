import {  AccountBoxOutlined, Assessment, CreditCardOutlined, Dashboard, ExitToAppOutlined, LocalShippingOutlined, MonitorHeartOutlined, NotificationsNone, Person2Outlined, ProductionQuantityLimitsOutlined, PsychologyAltOutlined, SettingsApplications } from '@mui/icons-material'
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>shifadmin</span>
      </div>
      <hr/>
      <div className='center'>
        <ul>
            <p className="title">MAIN</p>
            <li>
                <Dashboard className='icon'/>
                <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <li>
                <Person2Outlined className='icon'/>
                <span>Users</span>
            </li>
            <li>
                <ProductionQuantityLimitsOutlined className='icon'/>
                <span>Products</span>
            </li>
            <li>
                <CreditCardOutlined className='icon'/>
                <span>Orders</span>
            </li>
            <li>
                <LocalShippingOutlined className='icon'/>
                <span>Delivery</span>
            </li>
            <p className="title">USEFULL</p>
            <li>
                <Assessment className='icon'/>
                <span>Stats</span>
            </li>
            <li>
                <NotificationsNone className='icon'/>
                <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
                <MonitorHeartOutlined className='icon'/>
                <span>System Health</span>
            </li>
            <li>
                <PsychologyAltOutlined className='icon'/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsApplications className='icon'/>
                <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
                <AccountBoxOutlined className='icon'/>
                <span>Profile</span>
            </li>
            <li>
                <ExitToAppOutlined className='icon'/>
                <span>Logout</span>
            </li>
           
        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      
      </div>
    </div>
  )
}

export default Sidebar
 