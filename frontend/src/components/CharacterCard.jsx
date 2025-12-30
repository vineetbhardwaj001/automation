export default function CharacterCard({ data, onSelect }) {
  return (
    <div className="character-card" onClick={() => onSelect(data.name)}>
      <div className="character-glow"></div>
      <img src={data.image} alt={data.name} />
      <span>{data.name}</span>
    </div>
  );
}
