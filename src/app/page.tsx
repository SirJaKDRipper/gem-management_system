"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export default function Home() {
  const [total, setTotal] = useState<number>(0);
  const [baraya, setBaraya] = useState<number>(0);
  const [investment, setInvestment] = useState<number>(0);
  const [tharawwa, setTharawwa] = useState<number>(0);
  const [machine, setMachine] = useState<number>(0);
  const [land, setLand] = useState<number>(0);
  const [license, setLicense] = useState<number>(0);
  const [karuwa, setKaruwa] = useState<number>(0);
  const [hawula, setHawula] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let Total = total - baraya;
    const newTharawwa = (Total / 100) * 3;
    Total -= newTharawwa;

    const newMachine = (Total / 100) * 10;
    Total -= newMachine;

    const newLand = (Total / 100) * 20;
    Total -= newLand;

    const newLicense = (Total / 100) * 10;
    Total -= newLicense;

    Total -= investment;

    const newKaruwa = Total / 17;
    const newHawula = newKaruwa * 2;

    // Updating states
    setTharawwa(newTharawwa);
    setMachine(newMachine);
    setLand(newLand);
    setLicense(newLicense);
    setKaruwa(newKaruwa);
    setHawula(newHawula);
  };

  return (
    <div className="mt-5 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-geist-sans text-gray-900 dark:text-white bg-white dark:bg-gray-800">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-center">
          <h1 className="text-2xl">Welcome to</h1>
          <h1 className="text-4xl mt-5">
            <span className="text-red-400">Kapila Gunarathna </span>Gem Profit
            Management System
          </h1>
        </div>
        <CardSpotlight className="h-96 w-96">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Instructions
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Follow these steps to calculate your profit
            <ol className="list-inside list-decimal text-sm sm:text-left ">
              <li className="mt-5">Enter the total Amount.</li>
              <li className="mt-2">Enter the &apos;Baraya&apos; Amount.</li>
              <li className="mt-2">
                Enter the planned amount for future investment
              </li>
              <li className="mt-2">
                Click the calculate button to calculate the profit
              </li>
            </ol>
          </div>
        </CardSpotlight>

        <form
          className="border-b border-gray-900/10 pb-12"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <Label htmlFor="total">Enter the total Amount</Label>
            <Input
              id="total"
              placeholder="10000000"
              type="number"
              onChange={(e) => setTotal(Number(e.target.value))}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="baraya">Enter the &apos;Baraya&apos; Amount</Label>
            <Input
              id="baraya"
              placeholder="1000"
              type="number"
              onChange={(e) => setBaraya(Number(e.target.value))}
            />
          </div>
          <div className="mb-8">
            <Label htmlFor="investment">Future Investment</Label>
            <Input
              id="investment"
              placeholder="5000"
              type="number"
              onChange={(e) => setInvestment(Number(e.target.value))}
            />
          </div>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Calculate &rarr;
          </button>
        </form>
      </main>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <div>
          <Label htmlFor="tharawwa">Tharawwa :</Label>
          <Input id="tharawwa" type="text" value={tharawwa} readOnly />
        </div>
        <div>
          <Label htmlFor="machine">Machine :</Label>
          <Input id="machine" type="text" value={machine} readOnly />
        </div>
        <div>
          <Label htmlFor="land">Land :</Label>
          <Input id="land" type="text" value={land} readOnly />
        </div>
        <div>
          <Label htmlFor="license">License :</Label>
          <Input id="license" type="text" value={license} readOnly />
        </div>
        <div>
          <Label htmlFor="karuwa">Karuwa :</Label>
          <Input id="karuwa" type="text" value={karuwa} readOnly />
        </div>
        <div>
          <Label htmlFor="hawula">Hawula :</Label>
          <Input id="hawula" type="text" value={hawula} readOnly />
        </div>
      </div>
    </div>
  );
}
