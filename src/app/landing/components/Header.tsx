import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "./ThemeToggle";
import { MapPin } from "lucide-react";

export default function Header() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-12 p-4 transition-colors duration-300">
      <Card className="w-full md:w-[750px] relative transition-colors duration-300">
        <div className="absolute top-4 right-4 z-10">
          <ThemeToggle />
        </div>
        <CardHeader>
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Wrapper for avatar with glowing effect */}
            <div className="relative">
              {/* Breathing glow effect */}
              <div className="absolute inset-0 rounded-full ring-1 ring-green-500 shadow-md shadow-green-500/50 animate-pulse" />

              {/* Avatar on top */}
              <Avatar className="size-12 sm:size-16 relative z-10">
                <AvatarImage src="/profile.jpeg" alt="@shadcn" />
                <AvatarFallback>JG</AvatarFallback>
              </Avatar>
            </div>

            <div className="flex-grow">
              <CardTitle className="text-base sm:text-lg">
                {"Hi! I'm Jetross Galinato"}
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Full Stack Developer
              </CardDescription>
              <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground mt-1">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Based in the Philippines</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-md text-justify">
            I am a consistent learner who codes every day. I love programming
            and always seek new ways to grow and improve. Building things,
            solving problems, and learning something new is what excites me most
            about being a developer.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
