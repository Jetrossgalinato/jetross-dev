import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // 1. Import the card components

export default function Header() {
  return (
    // Added some padding to your wrapper for better spacing
    <div className="flex flex-row flex-wrap items-center gap-12 p-4">
      {/* 2. Wrap everything in the Card component */}
      <Card className="w-full md:w-[750px]">
        {" "}
        {/* Set a width for the card */}
        <CardHeader>
          {/* 3. Use flex to position the Avatar and text */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* This is your existing Avatar component */}
            <Avatar className="size-12 sm:size-16">
              <AvatarImage src="/profile.jpeg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            {/* This is the text part of the header */}
            <div className="flex-grow">
              <CardTitle className="text-lg sm:text-2xl">
                {"Hi! I'm Jetross Galinato"}
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                Full Stack Developer
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p>
            This is the main content area. You can put stats, settings, or other
            information here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
