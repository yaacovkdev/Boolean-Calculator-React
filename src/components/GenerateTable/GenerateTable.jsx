import "./GenerateTable.scss";

export default function GenerateTable({ data }) {
  if (data === null) return;

  const [t, f] = ["T", "F"];
  let thid = 0;
  const form_head = (
    <thead className="row-green">
      <tr key={`1`}>
        {data.map((col) => (
          <th key={`1-${++thid}`}>{col[0]}</th>
        ))}
      </tr>
    </thead>
  );

  let entries = [];

  //in case there is more rows to display
  for (let i = 1; i < data[0].length; i++) {
    let tdid = 0;

    entries.push(
      <tr key={i + 1}>
        {data.map((col) => (
          <td key={`${i + 1}-${++tdid}`}>{col[i] ? t : f}</td>
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