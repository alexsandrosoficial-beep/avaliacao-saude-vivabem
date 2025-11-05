import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Droplets,
  Moon,
  Dumbbell,
  Brain,
  Apple,
  Monitor,
  Smile,
  Sparkles,
} from "lucide-react";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { percentage = 0, answers = {} } = location.state || {};
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    if (!location.state) {
      navigate("/");
      return;
    }

    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 100);

    return () => clearTimeout(timer);
  }, [percentage, location.state, navigate]);

  const getHealthStatus = () => {
    if (percentage >= 80) return { text: "Excelente", color: "text-primary", icon: CheckCircle };
    if (percentage >= 60) return { text: "Bom", color: "text-secondary", icon: TrendingUp };
    if (percentage >= 40) return { text: "Regular", color: "text-accent", icon: AlertCircle };
    return { text: "Precisa Melhorar", color: "text-destructive", icon: AlertCircle };
  };

  const status = getHealthStatus();
  const StatusIcon = status.icon;

  const categories = [
    { id: "water", name: "Hidratação", icon: Droplets },
    { id: "sleep", name: "Sono", icon: Moon },
    { id: "exercise", name: "Exercício", icon: Dumbbell },
    { id: "stress", name: "Estresse", icon: Brain },
    { id: "nutrition", name: "Alimentação", icon: Apple },
    { id: "screen", name: "Tempo de Tela", icon: Monitor },
    { id: "mood", name: "Humor", icon: Smile },
    { id: "habits", name: "Hábitos", icon: Sparkles },
    { id: "bmi", name: "IMC", icon: TrendingUp },
    { id: "blood_pressure", name: "Pressão Arterial", icon: Heart },
    { id: "chronic_pain", name: "Dores Crônicas", icon: AlertCircle },
    { id: "checkup", name: "Check-up", icon: CheckCircle },
    { id: "fruits_vegetables", name: "Frutas e Vegetais", icon: Apple },
    { id: "flexibility", name: "Flexibilidade", icon: Dumbbell },
    { id: "posture", name: "Postura", icon: TrendingUp },
  ];

  const getTips = () => {
    const tips = [];
    
    if (answers.water === "low" || answers.water === "medium") {
      tips.push("Aumente sua ingestão de água para pelo menos 2L por dia");
    }
    if (answers.sleep === "low" || answers.sleep === "medium") {
      tips.push("Priorize 7-8 horas de sono de qualidade por noite");
    }
    if (answers.exercise === "low" || answers.exercise === "medium") {
      tips.push("Incorpore pelo menos 30 minutos de exercício diário");
    }
    if (answers.stress === "high" || answers.stress === "medium-high") {
      tips.push("Experimente técnicas de relaxamento como meditação ou yoga");
    }
    if (answers.nutrition === "poor" || answers.nutrition === "fair") {
      tips.push("Adicione mais frutas, vegetais e proteínas magras à sua dieta");
    }
    
    return tips.length > 0 ? tips : ["Continue mantendo seus hábitos saudáveis!"];
  };

  return (
    <div className="min-h-screen bg-gradient-hero py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">Seu Índice de Bem-Estar</h1>
          <p className="text-muted-foreground">Análise completa da sua saúde e hábitos</p>
        </div>

        <Card className="p-8 mb-8 shadow-medium animate-fade-in bg-gradient-card">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-4">
              <StatusIcon className={`w-16 h-16 ${status.color}`} />
            </div>
            <h2 className="text-6xl font-bold text-foreground mb-2">{animatedPercentage}%</h2>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {status.text}
            </Badge>
          </div>

          <Progress value={animatedPercentage} className="h-4 mb-8" />

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Pontos Fortes
              </h3>
              <ul className="space-y-2">
                {Object.entries(answers).map(([key, value]) => {
                  // Lógica correta para pontos fortes baseada nas respostas do quiz
                  const isStrength = 
                    value === "excellent" || 
                    value === "good" || 
                    value === "normal" || 
                    value === "regular" || 
                    value === "daily" ||
                    value === "five_plus" ||
                    value === "three_four" ||
                    value === "rare" ||
                    value === "never" && (key === "habits" || key === "chronic_pain" || key === "checkup") ||
                    value === "rarely" && key === "chronic_pain" ||
                    value === "sometimes" && key === "checkup" ||
                    value === "low" && (key === "stress" || key === "screen");
                    
                  if (isStrength) {
                    const category = categories.find(c => c.id === key);
                    if (!category) return null;
                    const Icon = category.icon;
                    return (
                      <li key={key} className="flex items-center gap-2 text-foreground">
                        {Icon && <Icon className="w-4 h-4 text-primary" />}
                        <span>{category.name}</span>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Áreas para Melhorar
              </h3>
              <ul className="space-y-2">
                {Object.entries(answers).map(([key, value]) => {
                  // Lógica correta para áreas de melhoria baseada nas respostas do quiz
                  const needsImprovement = 
                    value === "low" && key !== "stress" && key !== "screen" ||
                    value === "medium" ||
                    value === "poor" ||
                    value === "fair" ||
                    value === "high" && (key === "stress" || key === "screen" || key === "blood_pressure") ||
                    value === "medium-high" ||
                    value === "frequent" ||
                    value === "occasional" ||
                    value === "underweight" ||
                    value === "overweight" ||
                    value === "obese" ||
                    value === "borderline" ||
                    value === "unknown" ||
                    value === "sometimes" && key !== "checkup" ||
                    value === "rarely" && key !== "chronic_pain" ||
                    value === "never" && key !== "habits" && key !== "chronic_pain" ||
                    value === "none" ||
                    value === "one_two";
                    
                  if (needsImprovement) {
                    const category = categories.find(c => c.id === key);
                    if (!category) return null;
                    const Icon = category.icon;
                    return (
                      <li key={key} className="flex items-center gap-2 text-muted-foreground">
                        {Icon && <Icon className="w-4 h-4 text-accent" />}
                        <span>{category.name}</span>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Dicas Personalizadas</h3>
            <ul className="space-y-2">
              {getTips().map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border-2 border-primary/20">
            <p className="text-lg font-semibold text-center text-foreground italic">
              "Sua saúde é seu maior patrimônio. Cada pequeno passo hoje é um grande investimento no seu bem-estar de amanhã. Continue firme! 💪✨"
            </p>
          </div>
        </Card>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => navigate("/tips", { state: { percentage, answers } })}
            className="shadow-medium"
          >
            Ver Dicas Personalizadas
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
