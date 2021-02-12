import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  caption-side: bottom;
  
  td,
  th {
    border: none;
  }
  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

const getTitlesForShow = (item, excludeTitles) => {
    const titleFromItem = Object.keys(item)
    if (titleFromItem.length && excludeTitles) {
        return titleFromItem.filter(x => !excludeTitles.includes(x));
    }
    return titleFromItem
}

const Table = ({ data, hideTitles, canEdit, onClickEdit, onClickSave }) => {
    const titles = getTitlesForShow(data[0], hideTitles)
    return <TableEdit titles={titles} data={data} canEdit={canEdit || false} onClickEdit={onClickEdit} onClickSave={onClickSave}/>
};

const TableEdit = ({ titles, data, canEdit, onClickEdit, onClickSave}) => {
    return <StyledTable>
        <thead>
        <tr>
            {titles.map((item, index) => (
                <th key={index}>{item}</th>
            ))}
            {canEdit ? <th/> : ''}
        </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
            <tr key={index}>
                {titles.map((title, indexTitle) => (
                    <td key={indexTitle}>{item[title]}</td>
                ))}
                {canEdit ? <td>
                    <button onClick={()=>onClickEdit(item)}>Edit</button>
                </td> : ''}
            </tr>
        ))}
        </tbody>
    </StyledTable>
};
export default Table