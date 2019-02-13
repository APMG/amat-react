import Inner from "./Inner";
import Mark from "./Mark";

const WrapInMarks = (child, props) => {
  let inner = Inner(child, props);
  if (child.marks) {
    child.marks.reverse().forEach(mark => {
      inner = Mark(mark, inner, props);
    });
  }
  return inner;
};

export default WrapInMarks;
