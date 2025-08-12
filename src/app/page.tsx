import { ChatMessage } from "@/app/components/chat/ChatMessage";
import { ChatForm } from "@/app/components/chat/ChatForm";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <ChatMessage />
        <Button variant="contained" color="success">contained</Button>
      <ChatForm />
    </>
  );
}

