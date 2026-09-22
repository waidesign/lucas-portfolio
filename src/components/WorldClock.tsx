import React, { useState, useEffect } from 'react';

interface CityClockConfig {
  city: string;
  timeZone: string;
  shortCode: string;
}

const CLOCK_CITIES: CityClockConfig[] = [
  { city: 'Bangkok', timeZone: 'Asia/Bangkok', shortCode: 'BKK' },
  { city: 'Wellington', timeZone: 'Pacific/Auckland', shortCode: 'WLG' },
];

export const WorldClock: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [time, setTime] = useState<Date>(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getCityClock = (timeZone: string) => {
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone,
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      const parts = formatter.formatToParts(time);
      const hour = parts.find((p) => p.type === 'hour')?.value || '12';
      const minute = parts.find((p) => p.type === 'minute')?.value || '00';
      const period = parts.find((p) => p.type === 'dayPeriod')?.value?.toUpperCase() || 'AM';

      // Parse current hour/min in that timezone for analog hands
      const tzString = time.toLocaleString('en-US', { timeZone });
      const tzDate = new Date(tzString);
      const h = tzDate.getHours();
      const m = tzDate.getMinutes();
      const s = tzDate.getSeconds();

      const hourAngle = ((h % 12) + m / 60) * 30;
      const minuteAngle = (m + s / 60) * 6;
      const secondAngle = s * 6;

      // Check day relative to user's local day
      const localDay = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(time);
      const targetDay = new Intl.DateTimeFormat('en-US', { timeZone, weekday: 'short' }).format(time);
      const dayDiff = targetDay !== localDay ? targetDay : null;

      return { hour, minute, period, hourAngle, minuteAngle, secondAngle, dayDiff };
    } catch {
      return {
        hour: '12',
        minute: '00',
        period: 'PM',
        hourAngle: 0,
        minuteAngle: 0,
        secondAngle: 0,
        dayDiff: null,
      };
    }
  };

  return (
    <div
      id="world-clock"
      className={`inline-flex items-center gap-3.5 px-3 py-1.5 rounded-xs border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/60 backdrop-blur-xs select-none ${className}`}
      role="region"
      aria-label="World Clocks: Bangkok and Wellington"
    >
      {CLOCK_CITIES.map((item, idx) => {
        const clock = getCityClock(item.timeZone);

        return (
          <React.Fragment key={item.city}>
            {idx > 0 && (
              <div
                className="h-6 w-px bg-neutral-200 dark:bg-neutral-800 shrink-0"
                aria-hidden="true"
              />
            )}

            <div className="flex items-center gap-2">
              {/* iPhone-style Mini Analog Dial */}
              <div
                className="relative w-5 h-5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 flex items-center justify-center shrink-0 shadow-2xs"
                aria-hidden="true"
              >
                {/* 12, 3, 6, 9 markers */}
                <div className="absolute top-0.5 w-[1px] h-[2px] bg-neutral-400 dark:bg-neutral-500" />
                <div className="absolute bottom-0.5 w-[1px] h-[2px] bg-neutral-400 dark:bg-neutral-500" />
                <div className="absolute left-0.5 h-[1px] w-[2px] bg-neutral-400 dark:bg-neutral-500" />
                <div className="absolute right-0.5 h-[1px] w-[2px] bg-neutral-400 dark:bg-neutral-500" />

                {/* Hour Hand */}
                <div
                  className="absolute bottom-1/2 left-1/2 w-[1.5px] h-[5px] bg-neutral-800 dark:bg-neutral-100 rounded-full origin-bottom"
                  style={{
                    transform: `translate(-50%, 0) rotate(${clock.hourAngle}deg)`,
                  }}
                />

                {/* Minute Hand */}
                <div
                  className="absolute bottom-1/2 left-1/2 w-[1px] h-[7.5px] bg-neutral-600 dark:bg-neutral-300 rounded-full origin-bottom"
                  style={{
                    transform: `translate(-50%, 0) rotate(${clock.minuteAngle}deg)`,
                  }}
                />

                {/* iPhone Signature Orange Second Hand */}
                <div
                  className="absolute bottom-1/2 left-1/2 w-[0.75px] h-[8px] bg-amber-500 dark:bg-amber-400 origin-bottom"
                  style={{
                    transform: `translate(-50%, 0) rotate(${clock.secondAngle}deg)`,
                  }}
                />

                {/* Center Pin */}
                <div className="absolute w-1 h-1 rounded-full bg-neutral-900 dark:bg-white z-10" />
              </div>

              {/* City Name & Digital Time */}
              <div className="flex flex-col leading-none">
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-semibold tracking-wide uppercase text-neutral-500 dark:text-neutral-400">
                    {item.city}
                  </span>
                  {clock.dayDiff && (
                    <span className="text-[8px] font-mono px-1 py-0.2 rounded-xs bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-bold">
                      {clock.dayDiff}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline font-mono tabular-nums text-neutral-900 dark:text-white font-semibold text-xs leading-none mt-1">
                  <span>
                    {clock.hour}:{clock.minute}
                  </span>
                  <span className="text-[9px] font-normal text-neutral-400 dark:text-neutral-500 ml-0.5 uppercase">
                    {clock.period}
                  </span>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default WorldClock;
