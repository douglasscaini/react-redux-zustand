import { Video } from "lucide-react";

interface LessonProps {
    title: string;
    duration: string;
}

export function Lesson({ title, duration }: LessonProps) {
    return (
        <button className="flex items-center gap-3 text-sm text-zinc-400">
            <Video className="w-4 g-4 text-zinc-500" />
            <span>{title}</span>
            <span className="ml-auto font-mono text-xs to-zinc-500">{duration}</span>
        </button>
    );
}