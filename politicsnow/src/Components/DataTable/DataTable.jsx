import {DataGrid, GridColDef, GridValueGetterParams,GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss"
import { Link } from "react-router-dom";
import axios from "axios";
import api  from "../Config";
type Props = {
    columns:GridColDef[],
    rows:Object[],
    slug:string
}

const dataTable = (props:Props) => {

 const handleDelete = (_id:number)=>{
    axios.delete(`/${api}/contact/${_id}`)
    console.log(_id+"item has been deleted");

    
 }



    const actionColumn:GridColDef = {
        field:"action",
        headerName:"Action",
        width:200,
        renderCell:(params)=>{
            return(
               <div className="action">

                <Link to={`/${props.slug}/${params.row.id}`}>
                <img src="./Assets/view.svg" alt="" />
                </Link>
                <div className="delete"  onClick={()=>handleDelete(params.row.id)}>
                    <img src="./Assets/delete.svg" alt="" />
                </div>

            
               </div>
            )
        }
    }
    
      
  return (
    <div className="dataTable">
         <DataGrid 
         className="dataGrid"
        rows={props.rows}
        columns={[...props.columns,actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps:{debounceMs:500}

            }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    

    </div>
  )
}

export default dataTable