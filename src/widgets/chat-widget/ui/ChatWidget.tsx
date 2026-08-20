import { SendMessageBox } from "@/features/send-message";
import { MessageType } from "@/shared/types/message";
import { ChatHeader } from "@/widgets/chat-header";
import { ChatMessages } from "@/widgets/chat-messages";
import Box from "@mui/material/Box";

export const mockMessages: MessageType[] = [
  {
    role: "system",
    content:
      "Ты — Каори, локальный AI-ассистент. Отвечай понятно и помогай пользователю.",
  },
  {
    role: "user",
    content:
      "Привет! Можешь объяснить, как работает градиентный спуск в машинном обучении?",
  },
  {
    role: "assistant",
    content:
      "Конечно. **Градиентный спуск** — это алгоритм оптимизации, который уменьшает ошибку модели.\n\nОсновная идея:\n\n1. Модель делает предсказание.\n2. Вычисляется ошибка.\n3. Находится направление изменения параметров.\n4. Параметры обновляются в сторону уменьшения ошибки.\n\nФормула:\n\n`θ = θ - α ∇J(θ)`",
  },
  {
    role: "user",
    content: "А можешь показать простой пример на Python?",
  },
  {
    role: "assistant",
    content:
      "Да. Например, градиентный спуск для функции `f(x)=x²`:\n\n```python\nx = 10\nlr = 0.1\n\nfor _ in range(50):\n    grad = 2 * x\n    x -= lr * grad\n\nprint(x)\n```\n\nПосле нескольких итераций значение `x` приблизится к нулю.",
  },
  {
    role: "user",
    content:
      "Почему у меня не работает этот код?\n\n```ts\nconst sum = (a: number, b: number) => {\n  return a + b;\n}\n```",
  },
  {
    role: "assistant",
    content:
      "В этом примере функция написана корректно.\n\nПроверь:\n\n- где вызывается функция;\n- совпадают ли версии TypeScript;\n- нет ли ошибки конфигурации проекта.\n\nЕсли пришлёшь текст ошибки, я помогу разобраться.",
  },
];

export const ChatWidget = () => {
  return (
    <Box
      sx={{
        width: "450px",
        height: "600px",
        backgroundColor: "#1e1e1e",
        padding: "10px 15px 10px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        color: "#e0e0e0",
        border: "1px solid #3a3a3a",
      }}
    >
      <ChatHeader />
      <ChatMessages messages={mockMessages} />
      <SendMessageBox />
    </Box>
  );
};
