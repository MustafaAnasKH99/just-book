"use client";

import React from 'react';
import { Button } from '~/components/ui/button';
import { Textarea } from '~/components/ui/textarea';
import { useState } from "react";

export default function InputAppointment() {
  const [text, setText] = useState('');
  const [response, setResponse] = useState(null);
  
  const handleSend = async (text: string) => {
    // redirect to route api/[text]
    try {
      const res = await fetch('/api/date', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text }),
      });
      const data = await res.json();
      setResponse(data['choices'][0]['message']['content']);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <div>
        {response && <div className="decoration-solid text-xl text-lime-300">{response}</div>}
        <div className="grid w-full gap-2">
            <Textarea onChange={(e) => {setText(e.target.value)}} className='bg-black' placeholder="Ask for an appointment at your convenient time ..." />
            <Button onClick={(e) => handleSend(text)}>Send message</Button>
        </div>
    </div>
  );
}

