'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Bot, Send, User as UserIcon } from 'lucide-react';
import { getCoffeeRecommendation } from '@/app/actions';
import { user as mockUser, orderHistoryString } from '@/lib/data';
import Logo from './logo';
import { SidebarHeader, SidebarContent, SidebarFooter } from '@/components/ui/sidebar';

type Message = {
  role: 'user' | 'assistant' | 'loading';
  content: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm your Aura Coffee assistant. How can I help you today? Ask me for recommendations!",
    },
  ]);
  const [input, setInput] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage, { role: 'loading', content: '...' }]);
    setInput('');

    const recommendation = await getCoffeeRecommendation({
        query: input,
        orderHistory: orderHistoryString,
        loyaltyPoints: mockUser.loyaltyPoints,
    });
    
    setMessages((prev) => prev.filter((msg) => msg.role !== 'loading'));
    setMessages((prev) => [...prev, { role: 'assistant', content: recommendation }]);
  };

  return (
    <div className="flex h-full flex-col">
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent className="flex-1">
        <ScrollArea className="h-full px-4" ref={scrollAreaRef}>
          <div className="space-y-6">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-start gap-3',
                  message.role === 'user' && 'justify-end'
                )}
              >
                {message.role !== 'user' && (
                  <Avatar className="h-8 w-8 border">
                    <AvatarFallback>
                      <Bot className="h-5 w-5 text-primary" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    'max-w-[80%] rounded-lg p-3 text-sm',
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted',
                    message.role === 'loading' && 'animate-pulse'
                  )}
                >
                  <p>{message.content}</p>
                </div>
                {message.role === 'user' && (
                  <Avatar className="h-8 w-8 border">
                    <AvatarFallback>
                      <UserIcon className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter>
        <form onSubmit={handleSubmit} className="flex w-full items-center gap-2 p-2">
          <Input
            type="text"
            placeholder="Ask for a recommendation..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
            aria-label="Chat message"
          />
          <Button type="submit" size="icon" aria-label="Send message">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </SidebarFooter>
    </div>
  );
}
