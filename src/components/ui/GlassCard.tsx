import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";

type Props = HTMLMotionProps<"div"> & {
  className?: string;
  hover?: boolean;
};

export default function GlassCard({ className, hover = true, children, ...rest }: Props) {
  return (
    <motion.div
      className={cn("glass rounded-2xl", hover && "glass-hover", className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
