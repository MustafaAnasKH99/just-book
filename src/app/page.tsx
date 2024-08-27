"use client"

import Link from "next/link";
import InputAppointment from "~/app/_components/input_aapointment";
import { Button } from '~/components/ui/button';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div>
          <Button 
            className="bg-lime-300 text-black"
            onClick={async () => {
              window.location.href = "/api/nylas";
              // await fetch('/api/nylas')
            }}
          >Connect Nylas</Button>
        </div>
        <InputAppointment />
      </div>
    </main>
  );
}
