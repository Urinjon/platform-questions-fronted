
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@shared/ui/carousel";
import { ImageApp } from "@shared/ui/image";

export const HomeCarousel: React.FC = () => {
    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem>
                    <ImageApp 
                        width={1200}
                        height={100}
                        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                        alt={"Карусель"}                    
                    />
                </CarouselItem>
                <CarouselItem>
                    <ImageApp 
                        width={520}
                        height={520}
                        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                        alt={"Карусель"}                    
                    />
                </CarouselItem>
                <CarouselItem>
                    <ImageApp 
                        width={520}
                        height={520}
                        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                        alt={"Карусель"}                    
                    />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}