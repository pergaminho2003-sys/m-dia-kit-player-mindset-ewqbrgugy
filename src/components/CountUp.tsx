import React, { useEffect, useState, useRef } from 'react'

interface CountUpProps {
  end: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 1500,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [count, setCount] = useState<number>(0)
  const [hasAnimated, setHasAnimated] = useState<boolean>(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.2 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [hasAnimated])

  useEffect(() => {
    if (!hasAnimated) return

    let startTimestamp: number | null = null
    const startValue = 0

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      // Ease out quartic
      const easeProgress = 1 - Math.pow(1 - progress, 4)
      const currentVal = startValue + (end - startValue) * easeProgress

      setCount(currentVal)

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    window.requestAnimationFrame(step)
  }, [hasAnimated, end, duration])

  const formattedValue =
    decimals > 0 ? count.toFixed(decimals).replace('.', ',') : Math.round(count).toString()

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  )
}
