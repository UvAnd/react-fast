
interface IRowProps {
  leftChild: JSX.Element;
  rightChild: JSX.Element;
}
const Row = ({ leftChild, rightChild}: IRowProps):JSX.Element => {

  return (
    <div className="row mb2">
      <div className="col-md-6">
        {leftChild}
      </div>
      <div className="col-md-6">
        {rightChild}
      </div>
    </div>
  );
};

export default Row;