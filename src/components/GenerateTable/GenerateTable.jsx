import "./GenerateTable.scss";

export default function GenerateTable({ data }) {
  if (data === null) return;

  console.log(data);

  const [t, f] = ["T", "F"];
  let thid = 0;
  const form_head = (
    <thead>
      <tr key={`1`}>
        {data.map((col, index) => (
          <th key={`1-${++thid}`} className={index === data.length - 1 ? "results" : null}>{col[0]}</th>
        ))}
      </tr>
    </thead>
  );

  let entries = [];

  //in case there is more rows to display
  for (let i = 1; i < data[0].length; i++) {
    let tdid = 0;

    entries.push(
      <tr key={i + 1} className={data[data.length-1][i] ? "green-row" : "red-row"}>
        {data.map((col) => (
          <td key={`${i + 1}-${++tdid}`} title={`Var: ${col[0]}`}>{col[i] ? t : f}</td>
        ))}
      </tr>
    );
  }

  const form_body = <tbody>{entries}</tbody>;

  return (
    <table>
      {form_head}
      {form_body}
    </table>
  );
}