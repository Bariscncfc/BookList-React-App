import React from "react";

const TableField = ({ fieldName, settingsField, deleteBook, editBook }) => {
  return (
    <div className="tableField">
      {fieldName}
      {settingsField && (
        <>
          <i onClick={editBook} className="far fa-edit"></i>
          <i onClick={deleteBook} className="far fa-trash-alt"></i>
        </>
      )}
    </div>
  );
};
export default TableField;
