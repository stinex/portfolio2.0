import { useTypedSelector } from '@/app/hooks/useTypedSelector'
import Home from '@/app/screens/home/Home'
import { useEffect } from 'react'

export default function HomePage() {
  const { colorMode } = useTypedSelector((state) => state)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', colorMode as any)
  }, [colorMode])

  return <Home />
}
