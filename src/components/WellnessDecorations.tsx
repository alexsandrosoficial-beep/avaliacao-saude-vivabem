import { 
  Heart, 
  Activity, 
  Sparkles, 
  Sun, 
  Moon, 
  Droplet, 
  Apple, 
  Dumbbell, 
  Brain, 
  Smile, 
  Wind,
  Leaf,
  Flower2,
  TreePine,
  Waves
} from "lucide-react";

const WellnessDecorations = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Left - Hydration & Nature */}
      <Droplet className="absolute top-[8%] left-[5%] w-12 h-12 text-secondary opacity-15" />
      <Leaf className="absolute top-[15%] left-[10%] w-10 h-10 text-primary opacity-12" />
      <Flower2 className="absolute top-[12%] left-[3%] w-8 h-8 text-accent opacity-10" />
      
      {/* Top Center - Energy & Wellness */}
      <Sun className="absolute top-[5%] left-[45%] w-16 h-16 text-accent opacity-15" />
      <Sparkles className="absolute top-[10%] left-[50%] w-10 h-10 text-primary opacity-12" />
      
      {/* Top Right - Mental Health */}
      <Brain className="absolute top-[8%] right-[8%] w-14 h-14 text-secondary opacity-15" />
      <Smile className="absolute top-[15%] right-[5%] w-10 h-10 text-accent opacity-12" />
      <Heart className="absolute top-[12%] right-[15%] w-12 h-12 text-primary opacity-10" />
      
      {/* Middle Left - Fitness */}
      <Dumbbell className="absolute top-[35%] left-[4%] w-14 h-14 text-primary opacity-15" />
      <Activity className="absolute top-[42%] left-[8%] w-12 h-12 text-secondary opacity-12" />
      
      {/* Middle Center - Nature Elements */}
      <TreePine className="absolute top-[45%] left-[48%] w-16 h-16 text-primary opacity-10" />
      <Wind className="absolute top-[40%] left-[55%] w-10 h-10 text-secondary opacity-8" />
      
      {/* Middle Right - Nutrition & Health */}
      <Apple className="absolute top-[38%] right-[6%] w-14 h-14 text-accent opacity-15" />
      <Heart className="absolute top-[45%] right-[12%] w-10 h-10 text-primary opacity-12 rotate-12" />
      
      {/* Bottom Left - Sleep & Rest */}
      <Moon className="absolute bottom-[15%] left-[6%] w-14 h-14 text-secondary opacity-15" />
      <Sparkles className="absolute bottom-[22%] left-[12%] w-8 h-8 text-primary opacity-10" />
      
      {/* Bottom Center - Wellness Flow */}
      <Waves className="absolute bottom-[10%] left-[45%] w-20 h-20 text-secondary opacity-12" />
      <Droplet className="absolute bottom-[18%] left-[52%] w-10 h-10 text-primary opacity-10" />
      
      {/* Bottom Right - Nature & Energy */}
      <Leaf className="absolute bottom-[12%] right-[8%] w-16 h-16 text-primary opacity-15" />
      <Flower2 className="absolute bottom-[20%] right-[5%] w-12 h-12 text-accent opacity-12" />
      <Sun className="absolute bottom-[16%] right-[15%] w-10 h-10 text-secondary opacity-10" />
      
      {/* Additional scattered elements for visual richness */}
      <Heart className="absolute top-[25%] left-[20%] w-8 h-8 text-accent opacity-8" />
      <Sparkles className="absolute top-[55%] left-[25%] w-6 h-6 text-primary opacity-8" />
      <Activity className="absolute top-[65%] left-[15%] w-10 h-10 text-secondary opacity-10" />
      
      <Smile className="absolute top-[28%] right-[25%] w-8 h-8 text-primary opacity-8" />
      <Brain className="absolute top-[58%] right-[22%] w-10 h-10 text-accent opacity-10" />
      <Dumbbell className="absolute bottom-[35%] right-[18%] w-8 h-8 text-secondary opacity-8" />
      
      <Apple className="absolute top-[70%] left-[35%] w-8 h-8 text-accent opacity-8" />
      <Wind className="absolute bottom-[40%] left-[40%] w-8 h-8 text-primary opacity-8" />
      <TreePine className="absolute top-[32%] left-[65%] w-10 h-10 text-primary opacity-8" />
    </div>
  );
};

export default WellnessDecorations;
