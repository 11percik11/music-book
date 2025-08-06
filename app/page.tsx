'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui'
import { useEffect, useState } from 'react'
import { FooterLogo } from '@/components/shared/footer-logo'

export default function Home() {
  const router = useRouter()
  const [isShow, setIsShow] = useState(false)
  const [isStart, setIsStart] = useState(false)
  const [timer, setTimer] = useState(3)
  const [timeout, setTimeout] = useState<number | string>(
    process.env.NEXT_PUBLIC_TIMEOUT || 30,
  )

  const onRouteChange = () => {
    router.push('/quiz')
  }

  const onOpenModal = () => {
    setIsShow(() => true)
  }

  useEffect(() => {
    if (!isShow) return
    const interval = setInterval(() => {
      setTimeout((prev) => {
        if (prev === 0) {
          clearInterval(interval)
          setIsShow(() => false)
          return process.env.NEXT_PUBLIC_TIMEOUT || 30
        }
        return +prev - 1
      })
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [isShow])

  const onStartTimer = () => {
    setIsStart(() => true)
    setIsShow(() => false)

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          clearInterval(interval)
          onRouteChange()
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  return (
    <div className='flex flex-col justify-end min-h-screen'>
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
        <Image src='/images/main/Main.png' alt='bg' width={1080} height={1495} />
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
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        
        {/* <div className='px-[90px] py-[150px]'> */}
          {/* <p className='text-black text-[32px] uppercase font-bold mb-6'>
            Аудиовикторина ctnrc
          </p>
          <h1 className='title font-moscow text-[110px] leading-tight'>
            Тот <br /> самый <br /> звук
          </h1>
          <p className='w-[485px] text-2xl my-10'>
            Пройдите развлекательную финансовую аудиовикторину
          </p> */}
          <Button style={{position: "absolute", top: "931px", left:"100px", borderRadius: "24px", zIndex: "2"}} onClick={onOpenModal}>прослушать звук</Button>
        {/* </div> */}
      </motion.div>
      <Dialog open={isShow} onOpenChange={(value) => setIsShow(() => value)}>
        <DialogContent className='outline-none' style={{borderRadius: "64px", width: "814px"}}>
          <DialogHeader>
            <DialogTitle className='title font-moscow text-[72px]' style={{paddingLeft: "7px"}}>
              Инструкция
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <span style={{textAlign: "center", display: "flex"}}>
              Вам будет предложено прослушать звуковую дорожку, после чего у вас
              будет 20 секунд, чтобы выбрать один правильный вариант ответа.
              <br />
              <br />
              Всего мы зададим вам 5 вопросов по 4 варианта ответов в каждом.
              <br />
              <br/>
              Внимание и удачи в игре!
            </span>
          </DialogDescription>
          <Button onClick={onStartTimer} style={{padding: "0", borderRadius: "24px", maxWidth: "221px", height: "77px"}}>начать</Button>
        </DialogContent>
      </Dialog>
      <Dialog open={isStart}>
        <DialogContent className='outline-none bg-transparent'>
          <DialogTitle className='hidden'>таймер</DialogTitle>
          <DialogDescription className='hidden'></DialogDescription>
          <div className='font-moscow text-[300px] text-white'>{timer}</div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
