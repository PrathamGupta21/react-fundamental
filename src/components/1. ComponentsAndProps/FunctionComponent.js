const FunctionComponent = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} {props.gf}
      </h1>
      {props.children}
    </div>
  );
};

export default FunctionComponent;
