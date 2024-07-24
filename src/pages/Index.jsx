import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "The Origins of Artificial Intelligence",
    subtitle: "A Journey Through Time",
    author: "Your Name",
    date: new Date().toLocaleDateString(),
    type: "title",
    image: "https://via.placeholder.com/150?text=AI"
  },
  {
    title: "Introduction",
    content: "Artificial Intelligence (AI) is the simulation of human intelligence in machines. It's a transformative technology with far-reaching implications for society, industry, and our daily lives.",
    type: "content",
    image: "https://via.placeholder.com/150?text=Intro"
  },
  {
    title: "Early Concepts",
    content: "The idea of artificial beings with intelligence has roots in ancient myths and early philosophical discussions about the nature of human thought and reasoning.",
    type: "content",
    image: "https://via.placeholder.com/150?text=Early+Concepts"
  },
  {
    title: "The Birth of AI",
    content: "The field of AI was officially born at the Dartmouth Conference in 1956. Key figures like John McCarthy, Marvin Minsky, and Claude Shannon laid the groundwork for AI research.",
    type: "content",
    image: "https://via.placeholder.com/150?text=Birth+of+AI"
  },
  {
    title: "The Golden Years",
    content: "The 1960s and 1970s saw rapid development and optimism in AI. Researchers made significant progress in areas like natural language processing and problem-solving algorithms.",
    type: "content",
    image: "https://via.placeholder.com/150?text=Golden+Years"
  },
  {
    title: "AI Winters",
    content: "Periods of reduced funding and interest, known as 'AI winters', occurred in the 1970s and 1980s due to overhyped promises and limitations in computing power.",
    type: "content",
    image: "https://via.placeholder.com/150?text=AI+Winters"
  },
  {
    title: "Modern AI",
    content: "The 21st century has seen a resurgence in AI, driven by advances in machine learning, big data, and increased computational power.",
    type: "content",
    image: "https://via.placeholder.com/150?text=Modern+AI"
  },
  {
    title: "Key Technologies",
    content: "Neural networks, deep learning, and natural language processing are some of the key technologies driving modern AI development.",
    type: "content",
    image: "https://via.placeholder.com/150?text=Key+Tech"
  },
  {
    title: "Applications of AI",
    content: "AI is being used across various industries including healthcare (diagnosis), finance (fraud detection), and transportation (autonomous vehicles).",
    type: "content",
    image: "https://via.placeholder.com/150?text=AI+Apps"
  },
  {
    title: "Future of AI",
    content: "The future of AI holds promise for solving complex global challenges, but also raises important ethical and societal questions that need to be addressed.",
    type: "content",
    image: "https://via.placeholder.com/150?text=Future+AI"
  },
  {
    title: "Conclusion",
    content: "AI has come a long way from its conceptual origins to becoming a transformative force in our world. Its continued development will shape the future of technology and society.",
    type: "content",
    image: "https://via.placeholder.com/150?text=Conclusion"
  },
  {
    title: "Q&A",
    content: "Any questions?",
    type: "content",
    image: "https://via.placeholder.com/150?text=Q%26A"
  }
];

const Slide = ({ slide }) => (
  <Card className="w-full h-full flex items-center justify-center overflow-hidden">
    <CardContent className="text-center p-6 flex flex-col items-center justify-center h-full">
      {slide.type === "title" ? (
        <>
          <img src={slide.image} alt={slide.title} className="w-24 h-24 mb-4 rounded-full" />
          <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
          <h2 className="text-2xl mb-4">{slide.subtitle}</h2>
          <p className="text-xl">{slide.author}</p>
          <p className="text-lg">{slide.date}</p>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-semibold mb-4">{slide.title}</h2>
          <div className="flex items-center mb-4">
            <img src={slide.image} alt={slide.title} className="w-20 h-20 mr-4 rounded" />
            <p className="text-xl text-left">{slide.content}</p>
          </div>
        </>
      )}
    </CardContent>
  </Card>
);

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-4xl aspect-[16/9] mb-4 bg-white rounded-lg shadow-lg overflow-hidden">
        <Slide slide={slides[currentSlide]} />
      </div>
      <div className="flex justify-between w-full max-w-4xl">
        <Button onClick={prevSlide} variant="outline">
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <span className="text-sm text-muted-foreground">
          Slide {currentSlide + 1} of {slides.length}
        </span>
        <Button onClick={nextSlide} variant="outline">
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Index;