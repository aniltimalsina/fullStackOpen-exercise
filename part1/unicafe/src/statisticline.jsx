const StatisticLine = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            {props.text} {props.value}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default StatisticLine;
