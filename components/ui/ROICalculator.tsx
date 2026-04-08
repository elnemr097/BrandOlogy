"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";

function formatNumber(n: number): string {
  return Math.round(n).toLocaleString("ar-SA");
}

export default function ROICalculator() {
  const [employees, setEmployees] = useState(5);
  const [salary, setSalary] = useState(8000);
  const [wastedHours, setWastedHours] = useState(10);

  // Monthly cost of wasted time
  // hourly rate = salary / 160, weekly waste per employee = hourly_rate * wasted_hours
  // monthly = weekly * 4.3 * employees
  const hourlyCost = salary / 160;
  const wasteCost = employees * hourlyCost * wastedHours * 4.3;
  const roiSavings = wasteCost * 0.7;

  return (
    <div className="glass rounded-2xl p-6 md:p-8 flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-[#0f172a] text-center">
        احسب العائد المتوقع من الأتمتة
      </h2>

      <div className="flex flex-col gap-5">
        {/* Employees */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm text-[#0f172a]">
            <span>عدد الموظفين</span>
            <span className="font-bold text-[#00d4c8]">{employees}</span>
          </div>
          <input
            type="range"
            min={1}
            max={50}
            step={1}
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
            className="w-full accent-[#00d4c8] cursor-pointer"
          />
          <div className="flex justify-between text-xs text-[#64748b]">
            <span>1</span>
            <span>50</span>
          </div>
        </div>

        {/* Monthly salary */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm text-[#0f172a]">
            <span>متوسط الراتب الشهري (ريال)</span>
            <span className="font-bold text-[#00d4c8]">
              {formatNumber(salary)} ريال
            </span>
          </div>
          <input
            type="range"
            min={3000}
            max={30000}
            step={1000}
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className="w-full accent-[#00d4c8] cursor-pointer"
          />
          <div className="flex justify-between text-xs text-[#64748b]">
            <span>3,000</span>
            <span>30,000</span>
          </div>
        </div>

        {/* Wasted hours per week */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm text-[#0f172a]">
            <span>عدد الساعات المهدرة أسبوعياً</span>
            <span className="font-bold text-[#00d4c8]">{wastedHours} ساعة</span>
          </div>
          <input
            type="range"
            min={1}
            max={40}
            step={1}
            value={wastedHours}
            onChange={(e) => setWastedHours(Number(e.target.value))}
            className="w-full accent-[#00d4c8] cursor-pointer"
          />
          <div className="flex justify-between text-xs text-[#64748b]">
            <span>1</span>
            <span>40</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="rounded-xl border border-[rgba(0,212,200,0.2)] bg-[#f8fafc] p-5 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-[#64748b]">
            تكلفة الوقت الضائع شهرياً:
          </span>
          <span className="font-bold text-[#f59e0b] text-lg">
            {formatNumber(wasteCost)} ريال
          </span>
        </div>
        <div className="h-px bg-[rgba(0,212,200,0.15)]" />
        <div className="flex justify-between items-center">
          <span className="text-sm text-[#64748b]">
            وفورات متوقعة مع الأتمتة:
          </span>
          <span className="font-bold text-[#00d4c8] text-xl">
            {formatNumber(roiSavings)} ريال/شهر
          </span>
        </div>
      </div>

      {/* CTA */}
      <a
        href={CONTACT.whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="w-full bg-[#00d4c8] text-[#060d14] font-bold hover:bg-[#00a89f] transition-colors">
          احسب وتواصل معنا
        </Button>
      </a>
    </div>
  );
}
