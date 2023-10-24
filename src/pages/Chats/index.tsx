import { Input } from "../../components"
import {
  ChatContainer,
  DivInput,
  Main,
  SelfChatBaloon,
  OtherChatBaloon,
} from "./style"

export function Chats() {
  return (
    <Main>
      <h1>Conversa com Alceu Dispor</h1>
      <ChatContainer>
        <SelfChatBaloon>
          <p>Olá, tudo bem?</p>
        </SelfChatBaloon>
        <OtherChatBaloon>
          <p>Tudo, e você?</p>
        </OtherChatBaloon>
        <SelfChatBaloon>
          <p>Também</p>
        </SelfChatBaloon>
        <DivInput>
          <Input id={"message-input"} type={"text"} />
        </DivInput>
      </ChatContainer>
    </Main>
  )
}
