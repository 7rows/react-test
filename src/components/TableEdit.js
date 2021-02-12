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

const Table = ({ data, hideTitles, canEdit, onClickEdit }) => {
    const titles = getTitlesForShow(data[0], hideTitles)
    return <TableEdit titles={titles} data={data} canEdit={canEdit || false} onClickEdit={onClickEdit}/>
};

const TableHeader = ({titles, canEdit}) => {
    return         <thead>
    <tr>
        {titles.map((item, index) => (
            <th key={index}>{item}</th>
        ))}
        {canEdit ? <th/> : ''}
    </tr>
    </thead>
}

const TableRow = ({item, index}) => {
    return <tr> <td>{item.map((i,index)=>(<span key={index}>{i}</span>))}</td></tr>
}

const TableEdit = ({ titles, data, canEdit, onClickEdit}) => {
    return <StyledTable>
        <TableHeader titles={titles} canEdit={canEdit}/>
        <tbody>
        {data.map((item, index) => (
            <TableRow item={item} index={index} key={`${index}_row`}/>
 /*           <tr key={index}>
                {item.map((i, idxTd)=> <TableRow items={i} index={idxTd}/>)}
                {canEdit ? <td>
                    <button onClick={()=>onClickEdit(item)}>Edit</button>
                </td> : ''}
            </tr>*/
        ))}
        </tbody>
    </StyledTable>
};
export default Table