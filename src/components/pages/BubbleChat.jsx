import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function BubbleChat({ chat, variant }) {
  return (
    <div className={`flex flex-col gap-y-6 my-5 ${variant === "sender" ? "items-end" : "items-start"}`}>
      <div className={`flex ${variant === "sender" ? "justify-end" : "justify-start"} gap-x-2 rounded-md max-w-full`}>
        {variant === "sender" ? (
          <>
            <div className="text-left bg-blue-600 p-3 text-white">
              <h1 className="text-justify">{chat}</h1>
            </div>
            <div>
              <Avatar className="-z-10">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </>
        ) : (
          <>
            <div>
              <Avatar className="-z-10">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-right bg-blue-400 p-3 text-white">
              <h1 className="text-justify">{chat}</h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BubbleChat;
