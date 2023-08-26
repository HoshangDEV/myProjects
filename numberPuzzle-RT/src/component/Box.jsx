function Box(props) {
  return (
    <div
      className="bg-green-500 w-24 rounded-lg aspect-square flex items-center justify-center text-5xl text-green-950 select-none"
      onClick={props.swipeItem}
      id={props.id}
    >
      {props.item != 16 ? props.item : ""}
    </div>
  );
}

export default Box;
