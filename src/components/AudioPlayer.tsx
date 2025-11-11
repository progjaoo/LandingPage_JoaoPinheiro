import { Play, Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface AudioPlayerProps {
  songName?: string;
  artistName?: string;
}

const AudioPlayer = ({ 
  songName = "Nome da música", 
  artistName = "Nome do cantor" 
}: AudioPlayerProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-player-bg rounded-2xl shadow-xl p-6 animate-fade-in">
      <div className="flex items-center gap-4">
        {/* Play Button */}
        <button 
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-player-control hover:bg-primary-dark transition-colors flex items-center justify-center shadow-lg hover:scale-105 transform duration-200"
          aria-label="Play/Pause"
        >
          <Play className="w-6 h-6 md:w-7 md:h-7 text-white fill-white ml-1" />
        </button>

        {/* Song Info & Progress */}
        <div className="flex-1 min-w-0">
          <div className="mb-2">
            <h3 className="font-semibold text-foreground text-sm md:text-base truncate">
              {songName}
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm truncate">
              {artistName}
            </p>
          </div>
          
          {/* Progress Bar */}
          <Slider
            defaultValue={[33]}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        {/* Volume Control */}
        <button 
          className="w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-secondary transition-colors flex items-center justify-center"
          aria-label="Volume"
        >
          <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
