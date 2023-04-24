function StatsItem({ title, num }) {
  console.log();
  return (
    <li className="stats-item">
      <span className="title">{`${title.at(0).toUpperCase()}${title.slice(
        1
      )}`}</span>
      <span className="num">{num}</span>
    </li>
  );
}

function UserStats(props) {
  return (
    <ul className="user-stats">
      {Object.entries(props).map((prop) => (
        <StatsItem key={prop[1]} title={prop[0]} num={prop[1]} />
      ))}
    </ul>
  );
}

export default UserStats;
