'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import './ask-input.css';

export default function AskInput() {
  const [question, setQuestion] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission here
    console.log('Question:', question);
    setQuestion('');
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
      <form onSubmit={handleSubmit} className="ask-input__container">
        <Textarea
          ref={textareaRef}
          placeholder="Ask me anything..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="ask-input__textarea"
          rows={1}
        />
        <Button type="submit" className="ask-input__button" variant="ghost">
          →
        </Button>
      </form>
    </div>
  );
}

