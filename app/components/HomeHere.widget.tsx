"use client";

import { cn } from "@shared/lib/utils";
import { Button } from "@shared/ui/button";
import { Spotlight } from "@shared/ui/Spotlight";
import { TextGenerateEffect } from "@shared/ui/text-generate-effect";
import { MoveRight } from "lucide-react";

const words = `Создавай, проходи, соревнуйся.
Платформа с тысячами интересных вопросов
по самым разным темам — от науки до мемов.`;

export const HomeHero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-grid-neutral-900/40 bg-black/[0.96] antialiased">
      {/* Фоновая сетка + градиент */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black via-black/80 to-black/40" />

      <Spotlight
        className="-top-40 left-0 md:-top-32 md:left-1/2 md:-translate-x-1/2"
        fill="white"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 md:py-0">
        <div className="relative mb-10">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-500/30 via-fuchsia-500/30 to-cyan-500/30 opacity-70 blur-3xl" />
          <h1
            className={cn(
              "bg-gradient-to-b from-white via-neutral-200 to-neutral-400/80 bg-clip-text",
              "text-center text-5xl font-black tracking-tight md:text-7xl xl:text-8xl",
              "text-transparent",
            )}
          >
            Платформа
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              с вопросами
            </span>
          </h1>
        </div>

        <TextGenerateEffect
          words={words}
          className="mx-auto mt-6 max-w-2xl text-center text-lg font-light leading-relaxed text-neutral-300/90 md:text-xl"
          duration={0.8}
        />

        <div className="mt-12 flex flex-col gap-5 sm:flex-row">
          <Button
            size="lg"
            variant="primary"
            className="rounded-full px-10 h-14 text-lg"
          >
            Начать сейчас
            <MoveRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1.5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className={cn(
              "h-14 rounded-full border-neutral-700 px-10 text-lg font-medium",
              "bg-black/40 backdrop-blur-sm",
              "hover:bg-neutral-900/60 hover:border-neutral-600",
              "transition-all duration-300",
            )}
          >
            Регистрация
          </Button>
        </div>

        {/* Очень лёгкий намёк на статистику/фишки */}
        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-neutral-500">
          <div>10 000+ вопросов</div>
          <div>15+ категорий</div>
          <div>Рейтинг и достижения</div>
          <div>Мультиплеер</div>
        </div>
      </div>
    </div>
  );
};

// "use client";

// import { cn } from "@shared/lib/utils";
// import { Button } from "@shared/ui/button";
// import { ButtonGroup } from "@shared/ui/button-group";
// import { Spotlight } from "@shared/ui/Spotlight";
// import { TextGenerateEffect } from "@shared/ui/text-generate-effect";

// const words = `lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `;

// export const HomeHere: React.FC = () => {
//   return (
//     <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
//       <div
//         className={cn(
//           "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
//           "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
//         )}
//       />

//       <Spotlight
//         className="-top-40 left-0 md:-top-20 md:left-60"
//         fill="white"
//       />
//       <div className="relative z-10 mx-auto w-full space-y-4 max-w-7xl p-4 pt-20 md:pt-0">
//         <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
//           Платформа <br /> с вопросами.
//         </h1>
//         <TextGenerateEffect
//           words={words}
//           className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300"
//         />
//         <ButtonGroup className="w-full flex justify-center items-center">
//           <Button size="xxl" variant="default">
//             Начать
//           </Button>
//           <Button size="xxl" variant="secondary">
//             Зарегистрироваться
//           </Button>
//         </ButtonGroup>
//       </div>
//     </div>
//   );
// };
