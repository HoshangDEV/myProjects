function Box(props) {
  return (
    <div
      className="bg-[#4F709C] w-32 aspect-square rounded-xl flex items-center justify-center"
      id={props.id}
      onClick={props.putIcon}
      dangerouslySetInnerHTML={{ __html: props.boxValue }}
    ></div>
  );
}

export default Box;
{
  /* <i className="fa-regular fa-circle text-white text-5xl"></i> */
}
