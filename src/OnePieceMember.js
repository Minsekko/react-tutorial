export default function OnePieceMember({ emoji, name, role, desc }) {
    return (
        <div className="crew-card">
            <div className="img-placeholder"> {emoji} </div>
            <div className="info">
                <h2>{name}</h2>
                <p><strong>{role}</strong>-{role}</p>
            </div>
        </div>
    );
}