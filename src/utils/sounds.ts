// Utility functions for interactive button sounds

const audioContext = typeof window !== 'undefined' ? new (window.AudioContext || (window as any).webkitAudioContext)() : null;

export const playClickSound = () => {
  if (!audioContext) return;
  
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Som suave e dinâmico com sweep ascendente
  oscillator.frequency.value = 800; // Começa em G5
  oscillator.type = 'sine';
  
  // Envelope suave com ataque e release graduais
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.12, audioContext.currentTime + 0.02); // Ataque suave
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.25); // Release longo
  
  // Sweep de frequência suave para cima (G5 para C6)
  oscillator.frequency.exponentialRampToValueAtTime(1046.50, audioContext.currentTime + 0.12);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.25);
};

export const playSuccessSound = () => {
  if (!audioContext) return;
  
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.value = 523.25; // C5
  oscillator.type = 'sine';
  
  gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
  
  oscillator.start(audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
  oscillator.stop(audioContext.currentTime + 0.3);
};

export const playProgressSound = () => {
  if (!audioContext) return;
  
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Som alegre ascendente - notas D6 para E6
  oscillator.frequency.value = 1174.66;
  oscillator.type = 'sine';
  
  gainNode.gain.setValueAtTime(0.12, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
  
  oscillator.start(audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(1318.51, audioContext.currentTime + 0.1);
  oscillator.stop(audioContext.currentTime + 0.2);
};
