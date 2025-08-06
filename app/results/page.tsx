'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui'
import { FooterLogo } from '@/components/shared/footer-logo'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import { brotliDecompress } from 'zlib'

export default function Page() {
  return (
    <div className='flex flex-col min-h-screen'>
      <motion.div
              initial={{ opacity: 1, x: '-100%' }}
              animate={{ opacity: 1, x: '0' }}
              transition={{ duration: 0.5, delay: 0 }}
              className='absolute top-0 left-0 z-[2]'
            >
              <Image
                src='/images/main/logo-left.svg'
                alt='logo'
                width={411}
                height={257}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: 1, x: '0' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='absolute top-0 left-[270px] z-[1]'
            >
              <Image
                src='/images/main/logo-right.svg'
                alt='logo'
                width={618}
                height={257}
              />
            </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='absolute top-0 right-0 pointer-events-none'
      >
        <Image
          src='/images/main/Quiz.png'
          alt='bg'
          width={1080}
          height={1171}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: '100%', y: '-300px' }}
        animate={{ opacity: 1, x: '0', y: '0' }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='absolute top-[920px] right-10 pointer-events-none'
      >
        <Image
          src='/images/main/Robocat.png'
          alt='bg'
          width={581}
          height={820}
        />
      </motion.div>
      <FooterLogo width={1082} height={168} />
      <Suspense>
        <Results />
      </Suspense>
    </div>
  )
}

function Results() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [resultsParams, setResultsParams] = useState<string | null>(null)
  const [timeout, setTimeout] = useState<number | string>(
    process.env.NEXT_PUBLIC_TIMEOUT || 30,
  )

  const onClickMain = () => {
    router.push('/')
  }

  useEffect(() => {
    setResultsParams(() => searchParams.get('result'))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout((prev) => {
        if (prev === 0) {
          clearInterval(interval)
          router.push('/')
          return process.env.NEXT_PUBLIC_TIMEOUT || 30
        }
        return +prev - 1
      })
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  interface Result {
    id: number
    title: string
    subtitle?: string
  }

  const results: Result[] = [
    {
      id: 1,
      title: 'К сожалению, <br/> вы не угадали <br/> ни один <br/> из звуков.',
      subtitle: 'Можете попробовать еще раз',
    },
    {
      id: 2,
      title: 'Неплохо',
      subtitle: '',
    },
    {
      id: 3,
      title: 'Вы на верном <br/> пути, не <br/> сдавайтесь!',
      subtitle: '',
    },
    {
      id: 4,
      title: 'Хороший <br/> результат',
      subtitle: '',
    },
    {
      id: 5,
      title: 'Отличный <br/> результат',
      subtitle: '',
    },
    {
      id: 6,
      title: 'Впечатляющий <br/> результат',
      subtitle: 'Остротой вашего слуха можно лишь <br/> восхищаться! ',
    },
  ]

  return (
    <>
      {resultsParams && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className='px-[90px] pt-[337px] flex flex-col gap-10' style={{position: "absolute"}}>
            <div className='flex items-center gap-1 text-[72px] font-moscow'>
              <div className='flex gap-3 items-center'>
                <div className='flex items-center justify-center text-center w-[77px] h-[125px] bg-gradientTo/15' style={{background: "#FFFFFF33"}}>
                  <span className='title2'>{resultsParams}</span>
                </div>
                <span className='title2'>/</span>
                <div className='flex items-center justify-center text-center w-[77px] h-[125px]  bg-gradientTo/15' style={{background: "#FFFFFF33"}}>
                  <span className='title2'>5</span>
                </div>
              </div>
            </div>
            <h1
              className='title2 font-moscow text-[100px] leading-tight'
              dangerouslySetInnerHTML={{
                __html: results[+resultsParams].title,
              }}
            ></h1>
            {results[+resultsParams].subtitle && (
              <div
                className='text-2xl'
                dangerouslySetInnerHTML={{
                  __html: results[+resultsParams].subtitle!,
                }}
                style={{color: "#FFFFFF"}}
              ></div>
            )}

            <Button onClick={onClickMain} className='w-[290px]' style={{borderRadius: "24px"}}>
              На главную
            </Button>
          </div>
        </motion.div>
      )}
    </>
  )
}
