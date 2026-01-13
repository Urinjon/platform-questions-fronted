# Platform Questions Frontend

[Frontend deployment](https://platform-questions-fronted.vercel.app/)
[GitHub Frontend](https://github.com/Urinjon/platform-questions-fronted)
[GitHub Backend](https://github.com/xusniddinovk1/platform-questions-backend)


model Question {
  id          String           @id @default(uuid())
  title       String
  description String?
  type        QuestionType
  isActive    Boolean          @default(true)
  createdAt   DateTime         @default(now())
  options     QuestionOption[]
}

model QuestionOption {
  id         String   @id @default(uuid())
  text       String
  questionId String
  question   Question @relation(fields: [questionId], references: [id])
}


enum QuestionType {
  TEXT
  SINGLE
  MULTIPLE
}
