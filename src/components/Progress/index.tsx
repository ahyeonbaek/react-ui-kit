import { FC, useEffect, useRef } from "react";

interface ProgressProps {
  className?: string;
  stop?: boolean;
}

const Progress: FC<ProgressProps> = (props) => {
  const { className, stop } = props;
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null); //식별 id(정수)

  const performAnimation = () => {
    if (progressRef.current && percentRef.current < 100) {
      percentRef.current += 1;
      progressRef.current.style.width = `${percentRef.current}%`;
    }

    if (percentRef.current >= 100 && !stop && progressRef.current) {
      percentRef.current = 0;
      progressRef.current.style.width = `${percentRef.current}%`;
    }

    rafRef.current = requestAnimationFrame(performAnimation);
  };
  //stop이 true가 됐을 때 cancelAnimation
  useEffect(() => {
    const startProgress = async () => {
      // setIsLoading(true);
      if (progressRef.current) {
        progressRef.current.style.width = "0%";
        requestAnimationFrame(performAnimation);
      }
    };

    startProgress();

    if (stop && rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [stop]);

  return (
    <div
      style={{
        width: "100%",
        height: "20px",
        backgroundColor: "gray",
        display: stop ? "none" : "block",
        position: "absolute",
        top: "0px",
        left: "0px",
      }}
    >
      <div
        className={className}
        ref={progressRef}
        style={{ backgroundColor: "red", width: "0%", height: "100%" }}
      ></div>
    </div>
  );
};

export default Progress;
