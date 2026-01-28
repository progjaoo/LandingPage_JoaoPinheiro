// src/services/radioService.ts

// -----------------------------
// Interface da API
// -----------------------------
export interface RadioInfo {
  status: string;
  musica_atual: string;
}

// -----------------------------
// Função para buscar info atual da rádio
// -----------------------------
const API_URL = "";
//https://radiovox.conectastm.com/api-json/Vkc1d1FrNUZNVUpRVkRBOStS
export async function getRadioInfo(): Promise<RadioInfo | null> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Erro ao buscar dados da rádio");

    const data = await response.json();

    const musica_atual =
      typeof data.musica_atual === "string" && data.musica_atual.trim() !== ""
        ? data.musica_atual.trim()
        : "-";

    return {
      status: data.status || "desconhecido",
      musica_atual,
    };
  } catch (error) {
    console.error("Erro na API da rádio:", error);
    return null;
  }
}

class RadioService {
  private listeners: ((playing: boolean) => void)[] = [];
  private isPlaying = false;
  private audio: HTMLAudioElement | null = null;
  private audioUrl = "https://srv.soundstream.com.br/listen/maravilhafm/live";

  private getAudio(): HTMLAudioElement {
    if (!this.audio) {
      this.audio = new Audio();
      this.audio.src = this.audioUrl;
      this.audio.preload = "none";
      this.audio.autoplay = false;
    }
    return this.audio;
  }

  getPlayingState() {
    return this.isPlaying;
  }

  subscribe(callback: (playing: boolean) => void) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter((fn) => fn !== callback);
    };
  }

  play() {
    this.getAudio().play();
    this.isPlaying = true;
    this.emit();
  }

  pause() {
    this.getAudio().pause();
    this.isPlaying = false;
    this.emit();
  }

  toggle() {
    this.isPlaying ? this.pause() : this.play();
  }

  setVolume(vol: number) {
    this.getAudio().volume = vol;
  }

  private emit() {
    this.listeners.forEach((cb) => cb(this.isPlaying));
  }
}

const radioService = new RadioService();
export default radioService;