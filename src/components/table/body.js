import { Component } from "react";
class TableBody extends Component {
  render() {
    const rows = this.props.tableData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>
            <button onClick={() => this.props.removeCharacter(index)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
    return <tbody>{rows}</tbody>;
  }
}
export default TableBody;
