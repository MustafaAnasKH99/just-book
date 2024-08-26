"use client";

import React from 'react';
import { Button } from '~/components/ui/button';
import { Textarea } from '~/components/ui/textarea';
import { useState } from "react";

export default function InputAppointment() {
  const [text, setText] = useState('');
  
  const handleSend = async (text: string) => {
    // redirect to route api/[text]
    const res = await fetch(`/book/${text}`);
    const data = await res.json();
    console.log(data);
  }
  return (
    <div>
        <div className="grid w-full gap-2">
            <Textarea onChange={(e) => {setText(e.target.value)}} className='bg-black' placeholder="Ask for an appointment at your convenient time ..." />
            <Button onClick={(e) => handleSend(text)}>Send message</Button>
        </div>
        <h2>{text} ?</h2>
    </div>
  );
}

