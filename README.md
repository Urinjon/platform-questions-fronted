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