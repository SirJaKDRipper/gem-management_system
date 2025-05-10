"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export default function Home() {
  const [inputs, setInputs] = useState({
    total: 0,
    baraya: 0,
    investment: 0,
    employeeCount: 0,
  });

  const [results, setResults] = useState({
    tharawwa: 0,
    machine: 0,
    land: 0,
    license: 0,
    karuwa: 0,
    hawula: 0,
    total1: 0,
    total2: 0,
    total3: 0,
    total4: 0,
    mrSampathIncome: 0,
    bass1Income: 0,
    bass2Income: 0,
    mrLakmalIncome: 0,
    totalEmployeeIncome: 0,
    mrKapilaIncome: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputs((prev) => ({ ...prev, [id]: Number(value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let Total = inputs.total - inputs.baraya;
    const tharawwa = (Total / 100) * 3;
    Total -= tharawwa;
    const total1 = Total;

    const machine = (Total / 100) * 10;
    Total -= machine;
    const total2 = Total;

    const land = (Total / 100) * 20;
    Total -= land;
    const total3 = Total;

    const license = (Total / 100) * 10;
    Total -= license;
    const total4 = Total;

    Total -= inputs.investment;

    const karuwa = Total / 17;
    const hawula = karuwa * 2;

    const mrSampathIncome = land + license;
    const bass1Income = hawula;
    const bass2Income = karuwa + tharawwa / 2;
    const mrLakmalIncome = hawula;
    const totalEmployeeIncome = karuwa * inputs.employeeCount;
    const mrKapilaIncome = karuwa * 7 + machine + tharawwa / 2;

    setResults({
      tharawwa,
      machine,
      land,
      license,
      karuwa,
      hawula,
      total1,
      total2,
      total3,
      total4,
      mrSampathIncome,
      bass1Income,
      bass2Income,
      mrLakmalIncome,
      totalEmployeeIncome,
      mrKapilaIncome,
    });
  };

  return (
    <div className="mt-5 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-geist-sans text-gray-900 dark:text-white bg-white dark:bg-gray-800">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-center">
          <h1 className="text-2xl">Welcome to</h1>
          <h1 className="text-4xl mt-5">
            <span className="text-red-400">Kapila Gunarathna </span>Gem Profit Management System
          </h1>
        </div>

        <CardSpotlight className="h-96 w-96">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">Instructions</p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Follow these steps to calculate your profit
            <ol className="list-inside list-decimal text-sm sm:text-left ">
              <li className="mt-5">Enter the total Amount.</li>
              <li className="mt-2">Enter the &apos;Baraya&apos; Amount.</li>
              <li className="mt-2">Enter the planned amount for future investment</li>
              <li className="mt-2">Click the calculate button to calculate the profit</li>
            </ol>
          </div>
        </CardSpotlight>

        <form className="border-b border-gray-900/10 pb-12" onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="total">Enter the total Amount <span className="ml-1 text-red-500">*</span></Label>
            <Input id="total" placeholder="10000000" type="number" onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <Label htmlFor="employeeCount">Enter number of employees excluding Bass 1 and Bass 2 <span className="ml-1 text-red-500">*</span></Label>
            <Input id="employeeCount" placeholder="5" type="number" onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <Label htmlFor="baraya">Enter the &apos;Baraya&apos; Amount</Label>
            <Input id="baraya" placeholder="1000" type="number" onChange={handleChange} />
          </div>
          <div className="mb-8">
            <Label htmlFor="investment">Future Investment</Label>
            <Input id="investment" placeholder="5000" type="number" onChange={handleChange} />
          </div>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow"
            type="submit"
          >
            Calculate &rarr;
          </button>
        </form>
      </main>

      {results.karuwa > 0 && (
        <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-6">
          <ResultField label="Total - Baraya" value={inputs.total - inputs.baraya} />
          <ResultField label="Tharawwa" value={results.tharawwa} highlight />
          <ResultField label="Current Total - Tharawwa" value={results.total1} />
          <ResultField label="Machine" value={results.machine} highlight />
          <ResultField label="Current Total - Machine" value={results.total2} />
          <ResultField label="Land" value={results.land} highlight />
          <ResultField label="Current Total - Land" value={results.total3} />
          <ResultField label="License" value={results.license} highlight />
          <ResultField label="Current Total - License" value={results.total4} />
          <ResultField label="Karuwa" value={results.karuwa} />
          <ResultField label="Hawula" value={results.hawula} />
          <ResultField label="Mr. Sampath's Income" value={results.mrSampathIncome} highlight />
          <ResultField label="Bass 1 Income" value={results.bass1Income} highlight />
          <ResultField label="Bass 2 Income" value={results.bass2Income} highlight />
          <ResultField label="Mr. Lakmal's Income" value={results.mrLakmalIncome} highlight />
          <ResultField label="Total Salary of Employees" value={results.totalEmployeeIncome} highlight />
          <ResultField label="Mr. Kapila's Income" value={results.mrKapilaIncome} highlight />
        </div>
      )}
    </div>
  );
}

function ResultField({ label, value, highlight = false }: { label: string; value: number; highlight?: boolean }) {
  return (
    <div>
      <Label className={highlight ? "text-red-500" : ""}>{label}</Label>
      <Input type="text" value={value} readOnly />
    </div>
  );
}
