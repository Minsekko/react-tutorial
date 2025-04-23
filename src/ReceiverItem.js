function ReceiverItem() {
  return (
    <div className="receiver-item" key={idx}>
      <span>{elm}</span>
      <button onClick={clickHandle} value={elm}>
        x
      </button>
    </div>
  );
}

export default ReceiverItem;
