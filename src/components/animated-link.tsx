import { flushSync } from "react-dom";
import { useLocation } from "wouter";


interface Props {
  to: string;
  children: React.ReactNode;
  className?: string;
}
export const AnimatedLink = ({ to, children, className = ''  }: Props) => {

  const [_, setLocation] = useLocation();

  const handleViewTransition = () => {
    // @ts-ignore
    if(document.startViewTransition) {
      // @ts-ignore
      document.startViewTransition(() => {
        flushSync(() => {
          setLocation(to);
        });
      })
    } else setLocation(to)
  };
  return (
    <div
      onClick={handleViewTransition} 
      className={className}
    >
      { children }
    </div>
  )
}