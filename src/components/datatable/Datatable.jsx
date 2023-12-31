import "./datatable.scss";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { dataColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import {
  collection,
  // getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

const Datatable = (params) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Look here");
    console.log(dataColumns);
    console.log(params.type);
    console.log(dataColumns[params.type]);
    // const fetchData=async()=>{
    //   let list=[];
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({id:doc.id, ...doc.data()})
    //     });
    //      setData(list)
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
    // fetchData()
    //Listen Realtime
    const unsub = onSnapshot(collection(db, params.type), (snapShot) => {
      let list = [];
      snapShot.docs.forEach(
        (doc) => {
          list.push({ id: doc.id, ...doc.data() });
          setData(list);
        },
        (error) => {
          console.log(error);
        }
      );
    });

    return () => {
      unsub();
    };
  });

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, params.type, id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={dataColumns[params.type].concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[9, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
