import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface Question {
  id: string;
  category: string;
  question: string;
  options: { value: string; label: string; score: number }[];
}

const questions: Question[] = [
  {
    id: "water",
    category: "Hidratação",
    question: "Quantos copos de água você bebe por dia?",
    options: [
      { value: "low", label: "Menos de 4 copos", score: 0 },
      { value: "medium", label: "4-6 copos", score: 5 },
      { value: "good", label: "6-8 copos", score: 8 },
      { value: "excellent", label: "Mais de 8 copos", score: 10 },
    ],
  },
  {
    id: "sleep",
    category: "Sono",
    question: "Quantas horas você dorme por noite?",
    options: [
      { value: "low", label: "Menos de 5 horas", score: 0 },
      { value: "medium", label: "5-6 horas", score: 5 },
      { value: "good", label: "7-8 horas", score: 10 },
      { value: "excellent", label: "Mais de 8 horas", score: 8 },
    ],
  },
  {
    id: "exercise",
    category: "Exercício",
    question: "Com que frequência você pratica exercícios físicos?",
    options: [
      { value: "low", label: "Nunca ou raramente", score: 0 },
      { value: "medium", label: "1-2 vezes por semana", score: 5 },
      { value: "good", label: "3-4 vezes por semana", score: 8 },
      { value: "excellent", label: "5 ou mais vezes por semana", score: 10 },
    ],
  },
  {
    id: "stress",
    category: "Estresse",
    question: "Como você avalia seu nível de estresse diário?",
    options: [
      { value: "high", label: "Muito alto", score: 0 },
      { value: "medium-high", label: "Alto", score: 3 },
      { value: "medium", label: "Moderado", score: 7 },
      { value: "low", label: "Baixo", score: 10 },
    ],
  },
  {
    id: "nutrition",
    category: "Alimentação",
    question: "Como você descreveria sua alimentação?",
    options: [
      { value: "poor", label: "Muito processada e irregular", score: 0 },
      { value: "fair", label: "Às vezes como bem", score: 5 },
      { value: "good", label: "Geralmente balanceada", score: 8 },
      { value: "excellent", label: "Muito saudável e balanceada", score: 10 },
    ],
  },
  {
    id: "screen",
    category: "Telas",
    question: "Quantas horas por dia você passa em frente a telas (fora do trabalho)?",
    options: [
      { value: "high", label: "Mais de 6 horas", score: 0 },
      { value: "medium-high", label: "4-6 horas", score: 3 },
      { value: "medium", label: "2-4 horas", score: 7 },
      { value: "low", label: "Menos de 2 horas", score: 10 },
    ],
  },
  {
    id: "mood",
    category: "Humor",
    question: "Como está seu humor na maior parte do tempo?",
    options: [
      { value: "poor", label: "Frequentemente triste ou ansioso", score: 0 },
      { value: "fair", label: "Às vezes desanimado", score: 5 },
      { value: "good", label: "Geralmente positivo", score: 8 },
      { value: "excellent", label: "Muito feliz e motivado", score: 10 },
    ],
  },
  {
    id: "habits",
    category: "Hábitos",
    question: "Você consome álcool ou fuma?",
    options: [
      { value: "frequent", label: "Sim, frequentemente", score: 0 },
      { value: "occasional", label: "Sim, ocasionalmente", score: 5 },
      { value: "rare", label: "Raramente", score: 8 },
      { value: "never", label: "Nunca", score: 10 },
    ],
  },
  {
    id: "bmi",
    category: "IMC",
    question: "Como você classificaria seu Índice de Massa Corporal (IMC)?",
    options: [
      { value: "underweight", label: "Abaixo do peso (IMC < 18.5)", score: 3 },
      { value: "normal", label: "Peso normal (IMC 18.5-24.9)", score: 10 },
      { value: "overweight", label: "Sobrepeso (IMC 25-29.9)", score: 5 },
      { value: "obese", label: "Obesidade (IMC > 30)", score: 0 },
    ],
  },
  {
    id: "blood_pressure",
    category: "Pressão Arterial",
    question: "Como está sua pressão arterial?",
    options: [
      { value: "high", label: "Alta (acima de 140/90)", score: 0 },
      { value: "borderline", label: "Limítrofe (130-139/85-89)", score: 5 },
      { value: "normal", label: "Normal (120/80)", score: 10 },
      { value: "unknown", label: "Não sei", score: 3 },
    ],
  },
  {
    id: "chronic_pain",
    category: "Saúde Física",
    question: "Você sente dores crônicas no corpo?",
    options: [
      { value: "frequent", label: "Sim, frequentemente", score: 0 },
      { value: "sometimes", label: "Às vezes", score: 5 },
      { value: "rarely", label: "Raramente", score: 8 },
      { value: "never", label: "Nunca", score: 10 },
    ],
  },
  {
    id: "checkup",
    category: "Check-up",
    question: "Com que frequência você faz exames de rotina?",
    options: [
      { value: "never", label: "Nunca fiz", score: 0 },
      { value: "rarely", label: "Raramente (mais de 2 anos)", score: 3 },
      { value: "sometimes", label: "De vez em quando (1-2 anos)", score: 7 },
      { value: "regular", label: "Regularmente (anual)", score: 10 },
    ],
  },
  {
    id: "fruits_vegetables",
    category: "Nutrição",
    question: "Quantas porções de frutas e vegetais você come por dia?",
    options: [
      { value: "none", label: "Nenhuma ou quase nenhuma", score: 0 },
      { value: "one_two", label: "1-2 porções", score: 5 },
      { value: "three_four", label: "3-4 porções", score: 8 },
      { value: "five_plus", label: "5 ou mais porções", score: 10 },
    ],
  },
  {
    id: "flexibility",
    category: "Flexibilidade",
    question: "Você pratica alongamentos ou atividades de flexibilidade?",
    options: [
      { value: "never", label: "Nunca", score: 0 },
      { value: "rarely", label: "Raramente", score: 3 },
      { value: "sometimes", label: "Algumas vezes por semana", score: 7 },
      { value: "daily", label: "Diariamente", score: 10 },
    ],
  },
  {
    id: "posture",
    category: "Postura",
    question: "Como você avalia sua postura durante o dia?",
    options: [
      { value: "poor", label: "Ruim (curvado, má posição)", score: 0 },
      { value: "fair", label: "Regular (tento melhorar)", score: 5 },
      { value: "good", label: "Boa (consciente da postura)", score: 8 },
      { value: "excellent", label: "Excelente (sempre atento)", score: 10 },
    ],
  },
];

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];

  const handleAnswer = (value: string) => {
    // Validate that the value exists in the current question options
    const isValidOption = currentQ.options.some(opt => opt.value === value);
    if (!isValidOption) {
      toast.error("Opção inválida selecionada");
      return;
    }
    setAnswers({ ...answers, [currentQ.id]: value });
  };

  const handleNext = () => {
    // Validate current answer exists
    if (!answers[currentQ.id]) {
      toast.error("Por favor, selecione uma opção antes de continuar");
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate scores with validation
      const scores = questions.map((q) => {
        const answer = answers[q.id];
        const selectedOption = q.options.find((opt) => opt.value === answer);
        
        // Validate each answer exists and is valid
        if (!answer || !selectedOption) {
          return 0;
        }
        
        return selectedOption.score;
      });
      
      const totalScore = scores.reduce((a, b) => a + b, 0);
      const maxScore = questions.length * 10;
      const percentage = Math.round((totalScore / maxScore) * 100);

      // Validate percentage is within bounds
      const validPercentage = Math.max(0, Math.min(100, percentage));

      navigate("/results", { state: { percentage: validPercentage, answers } });
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen quiz-background py-12 px-4">
      <div className="content-wrapper max-w-2xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium text-muted-foreground">
              Pergunta {currentQuestion + 1} de {questions.length}
            </h2>
            <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="p-8 shadow-medium animate-fade-in bg-gradient-card">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {currentQ.category}
            </span>
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-8">{currentQ.question}</h1>

          <RadioGroup value={answers[currentQ.id]} onValueChange={handleAnswer}>
            <div className="space-y-4">
              {currentQ.options.map((option) => {
                const isSelected = answers[currentQ.id] === option.value;
                return (
                  <div key={option.value} className="relative">
                    <RadioGroupItem 
                      value={option.value} 
                      id={option.value}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={option.value}
                      className={`flex items-center justify-between cursor-pointer p-4 rounded-lg border-2 transition-all ${
                        isSelected
                          ? "border-primary bg-primary/10 shadow-md"
                          : "border-border hover:border-primary/50 hover:bg-accent/50"
                      }`}
                    >
                      <span className={isSelected ? "font-semibold text-primary" : ""}>
                        {option.label}
                      </span>
                      {isSelected && (
                        <CheckCircle2 className="w-5 h-5 text-primary animate-in zoom-in-50 duration-200" />
                      )}
                    </Label>
                  </div>
                );
              })}
            </div>
          </RadioGroup>

          <div className="flex gap-4 mt-8">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className="flex-1"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <Button
              onClick={handleNext}
              disabled={!answers[currentQ.id]}
              className="flex-1"
            >
              {currentQuestion === questions.length - 1 ? "Ver Resultados" : "Próxima"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
