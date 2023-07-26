import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
      <Navbar/>
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div> 
          <h1 className="title">Information</h1>
          <div className="item">
            <img src="https://images.pexels.com/photos/17567984/pexels-photo-17567984/free-photo-of-brunette-in-blazer-an-pants-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="itemImg" />
            <div className="details">
              <h1 className="itemTitle">Jane Doe</h1>
              <div className="detailItem">
                 <span className="itemKey">Email:</span>
                 <span className="itemValue">janedoe@gmail.com</span>
              </div>
              <div className="detailItem">
                 <span className="itemKey">Phone:</span>
                 <span className="itemValue">+972-547862598</span>
              </div>
              <div className="detailItem">
                 <span className="itemKey">Adress:</span>
                 <span className="itemValue">Haifa haHalutz 10</span>
              </div>
              <div className="detailItem">
                 <span className="itemKey">Country:</span>
                 <span className="itemValue">Israel</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3 / 1} title="User Spending (Last 6 Months)"/>
        </div>
      </div>
      <div className="bottom">
      <h1 className="title">Last Transactions</h1>
         <List/>


      </div>
      </div>
     
    </div>
  )
}

export default Single
