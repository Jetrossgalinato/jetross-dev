import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function Header() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <Avatar className="size-16">
        <AvatarImage src="/profile.jpeg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
