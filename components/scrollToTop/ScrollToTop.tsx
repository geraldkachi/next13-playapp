import {  ReactNode, useEffect, useState } from 'react'
import "./styles.css"
interface scrollTopProps {
  children?: ReactNode;
  className?: string;
}
const ScrollToTop = ({children, className}: scrollTopProps) => {
  const [scrollShowTopButton, setScrollShowTopButton] = useState(false)

  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setScrollShowTopButton(true)
      } else {
        setScrollShowTopButton(false)
      }
    })
  }, [])


  return <>
    {scrollShowTopButton && <div className={`top-btn-position top-btn-style text-white ${className}`} onClick={scrollTop}>{children}</div>}
  </>
}

export default ScrollToTop
