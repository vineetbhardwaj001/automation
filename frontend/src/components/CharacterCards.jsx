export default function CharacterCards() {
  const styles = ["Realistic", "Anime", "Dark", "Soft"];
  return (
    <div className="card-row">
      {styles.map((s) => (
        <div key={s} className="char-card">{s}</div>
      ))}
    </div>
  );
}
