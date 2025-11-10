const WellnessDecorations = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Folhas decorativas */}
      <svg
        className="absolute top-[10%] left-[5%] w-16 h-16 opacity-20 animate-float"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 10C50 10 30 30 30 50C30 70 50 90 50 90C50 90 45 70 45 50C45 30 50 10 50 10Z"
          fill="hsl(var(--primary))"
        />
        <path
          d="M50 10C50 10 70 30 70 50C70 70 50 90 50 90C50 90 55 70 55 50C55 30 50 10 50 10Z"
          fill="hsl(var(--secondary))"
        />
      </svg>

      <svg
        className="absolute top-[60%] right-[8%] w-20 h-20 opacity-15 animate-float-reverse"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 10C50 10 30 30 30 50C30 70 50 90 50 90C50 90 45 70 45 50C45 30 50 10 50 10Z"
          fill="hsl(var(--accent))"
        />
        <path
          d="M50 10C50 10 70 30 70 50C70 70 50 90 50 90C50 90 55 70 55 50C55 30 50 10 50 10Z"
          fill="hsl(var(--primary))"
        />
      </svg>

      {/* Corações decorativos */}
      <svg
        className="absolute top-[25%] right-[15%] w-12 h-12 opacity-15 animate-pulse"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 85C50 85 15 60 15 35C15 20 25 10 35 10C42 10 47 14 50 20C53 14 58 10 65 10C75 10 85 20 85 35C85 60 50 85 50 85Z"
          fill="hsl(var(--accent))"
        />
      </svg>

      <svg
        className="absolute bottom-[20%] left-[12%] w-14 h-14 opacity-20 animate-pulse"
        style={{ animationDelay: '1s' }}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 85C50 85 15 60 15 35C15 20 25 10 35 10C42 10 47 14 50 20C53 14 58 10 65 10C75 10 85 20 85 35C85 60 50 85 50 85Z"
          fill="hsl(var(--secondary))"
        />
      </svg>

      {/* Ondas decorativas */}
      <svg
        className="absolute bottom-[10%] right-[20%] w-24 h-24 opacity-10 animate-float"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 50C20 30 30 30 40 50C50 70 60 70 70 50C80 30 90 30 100 50"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M10 60C20 40 30 40 40 60C50 80 60 80 70 60C80 40 90 40 100 60"
          stroke="hsl(var(--secondary))"
          strokeWidth="3"
          fill="none"
        />
      </svg>

      <svg
        className="absolute top-[40%] left-[8%] w-20 h-20 opacity-15 animate-float-reverse"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 50C20 30 30 30 40 50C50 70 60 70 70 50C80 30 90 30 100 50"
          stroke="hsl(var(--accent))"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M10 60C20 40 30 40 40 60C50 80 60 80 70 60C80 40 90 40 100 60"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          fill="none"
        />
      </svg>

      {/* Folhas menores espalhadas */}
      <svg
        className="absolute top-[70%] left-[25%] w-10 h-10 opacity-10 animate-float"
        style={{ animationDelay: '2s' }}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 10C50 10 30 30 30 50C30 70 50 90 50 90C50 90 45 70 45 50C45 30 50 10 50 10Z"
          fill="hsl(var(--secondary))"
        />
        <path
          d="M50 10C50 10 70 30 70 50C70 70 50 90 50 90C50 90 55 70 55 50C55 30 50 10 50 10Z"
          fill="hsl(var(--primary))"
        />
      </svg>

      <svg
        className="absolute bottom-[35%] right-[30%] w-12 h-12 opacity-12 animate-float-reverse"
        style={{ animationDelay: '3s' }}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 10C50 10 30 30 30 50C30 70 50 90 50 90C50 90 45 70 45 50C45 30 50 10 50 10Z"
          fill="hsl(var(--accent))"
        />
        <path
          d="M50 10C50 10 70 30 70 50C70 70 50 90 50 90C50 90 55 70 55 50C55 30 50 10 50 10Z"
          fill="hsl(var(--secondary))"
        />
      </svg>
    </div>
  );
};

export default WellnessDecorations;
