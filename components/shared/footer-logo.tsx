import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Props {
  className?: string
  width?: number
  height?: number
}

export const FooterLogo: React.FC<Props> = ({ className, width, height }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: '0' }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          'absolute bottom-0 right-0 z-[1] pointer-events-none',
          className,
        )}
      >
        <Image
          src='/images/main/footer.svg'
          alt='logo'
          width={width || 430}
          height={height || 170}
        />
      </motion.div>
    </>
  )
}
