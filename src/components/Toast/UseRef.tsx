// import { useEffect, useRef, useState } from "react";

// const UseRefTest = () => {
//   const [count, setCount] = useState(1);
//   const renderingCount = useRef(1);

//   useEffect(() => {
//     console.log("renderingCount : ", renderingCount.current);
//     ++renderingCount.current;
//   });

//   return (
//     <div>
//       <div>Count : {count}</div>
//       <div>{renderingCount.current}</div>
//       <button onClick={() => ++renderingCount.current}> count up </button>
//     </div>
//   );
// };

// export default UseRefTest;
