import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
  color?: "primary" | "secondary" | "accent";
}

export function FeatureCard({ title, description, image, delay = 0, color = "primary" }: FeatureCardProps) {
  const colors = {
    primary: "border-primary/30 hover:border-primary/80 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)]",
    secondary: "border-secondary/30 hover:border-secondary/80 shadow-[0_0_30px_-10px_hsl(var(--secondary)/0.3)]",
    accent: "border-accent/30 hover:border-accent/80 shadow-[0_0_30px_-10px_hsl(var(--accent)/0.3)]",
  };

  const textColors = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className={`group relative overflow-hidden rounded-lg border bg-black/40 backdrop-blur-sm transition-all duration-500 ${colors[color]}`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="mb-2 flex items-center justify-between">
          <h3 className={`font-display text-2xl font-bold uppercase tracking-wide ${textColors[color]}`}>
            {title}
          </h3>
          <ArrowUpRight className={`h-6 w-6 opacity-0 transition-all duration-300 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 ${textColors[color]}`} />
        </div>
        <p className="text-gray-400 font-light leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Tech decoration */}
      <div className="absolute top-4 right-4 flex gap-1">
        <div className={`h-1 w-1 rounded-full ${textColors[color]} bg-current`} />
        <div className={`h-1 w-1 rounded-full ${textColors[color]} bg-current opacity-50`} />
        <div className={`h-1 w-1 rounded-full ${textColors[color]} bg-current opacity-25`} />
      </div>
    </motion.div>
  );
}
