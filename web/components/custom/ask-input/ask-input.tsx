'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import './ask-input.css';

const conversationStarters = [
  'Can we arrange a meeting?',
  'Who is Alper?',
  'What type of projects did Alper do?',
  'Lets send a mail to Alper',
];

export default function AskInput() {
  const [question, setQuestion] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission here
    console.log('Question:', question);
    setQuestion('');
  };

  const handleStarterClick = (starter: string) => {
    setQuestion(starter);
    textareaRef.current?.focus();
  };

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [question]);

  return (
    <div className="ask-input__wrapper">
      <div className="ask-input__content">
        <form onSubmit={handleSubmit} className="ask-input__container">
          <Textarea
            ref={textareaRef}
            placeholder="Hey 👋 I'm his personal assistant. Ask me anything..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="ask-input__textarea"
            rows={1}
          />
          <Button type="submit" className="ask-input__button" variant="ghost">
            →
          </Button>
        </form>
        <div className="ask-input__starters">
          {conversationStarters.map((starter, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleStarterClick(starter)}
              className="ask-input__starter"
            >
              {starter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

