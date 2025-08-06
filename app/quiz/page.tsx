'use client'
import { FooterLogo } from '@/components/shared/footer-logo'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui'
import { cn } from '@/lib/utils'
import { questionsData, Answer, Question } from '@/public/data/data'

export default function Page() {
  const router = useRouter()

  const [questions, setQuestions] = useState<Question[]>([])
  const [timer, setTimer] = useState(20)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [isShowModal, setIsShowModal] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const onClickAnswer = (answer: Answer) => {
    setSelectedAnswer(() => answer)
  }

  const onClickToAnswer = () => {
    if (selectedAnswer?.isCorrect) {
      setCorrectAnswers((prev) => prev + 1)
      setIsCorrect(true)
    }
    setIsShowModal(() => true)
  }

  const onClickNext = () => {
    if (currentQuestion === 4) {
      onClickEnd()
      return
    }

    setCurrentQuestion((prev) => prev + 1)
    setSelectedAnswer(() => null)
    setIsShowModal(() => false)
    setTimer(() => 20) ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    setTimeout(() => {
      setIsCorrect(false)
    }, 500)
  }

  const onClickEnd = () => {
    router.push(`/results?result=${correctAnswers}`)
  }

  const createLoop = () => {
    return setInterval(() => {
      setTimer((prev) => {
        if (isShowModal) return prev

        if (prev === 0) {
          onClickNext()
          return 20
        }
        return prev - 1
      })
    }, 1000)
  }

  const getRandomElements = (arr: Question[], num: number): Question[] => {
    const shuffled = arr.sort(() => 0.5 - Math.random())

    return shuffled.slice(0, num)
  }

  useEffect(() => {
    const interval = createLoop()

    return () => {
      clearInterval(interval)
    }
  }, [timer])

  useEffect(() => {
    if (!questions.length) return
    audioRef.current!.src = questions[currentQuestion].soundPath
    audioRef.current!.volume = 1
    audioRef.current!.currentTime = 0
    audioRef.current!.play()
  }, [currentQuestion, questions])

  useEffect(() => {
    setQuestions(() => getRandomElements(questionsData, 5))
  }, [])

  return (
    <>
      <div
        className='relative flex flex-col px-24 py-16 min-h-screen'
        style={{
          backgroundImage: "url('/images/main/Quiz.webp')",
          backgroundSize: 'cover', // or 'contain' depending on your need
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <audio ref={audioRef} className='hidden'></audio>
        {/*header*/}
        <div className='flex gap-[50px] items-center'>
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
          {/*timer*/}
        </div>
        <div className='mt-[263px] flex items-center'>
          <motion.div
            initial={{ opacity: 0, y: '-200%' }}
            animate={{ opacity: 1, y: '0' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='font-moscow text-white text-[72px] text-center'
          >
            {currentQuestion + 1}/5
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: '-200%' }}
            animate={{ opacity: 1, y: '0' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='ml-auto'
          >
            <div className='flex items-center gap-1 text-[48px] font-moscow'>
              <div className='flex gap-1'>
                <div
                  className='flex items-center justify-center text-center pl-2 pr-1 py-3 bg-gradientTo/15'
                  style={{ background: '#C177FF' }}
                >
                  <span className='pl-1 text-white'>0</span>
                </div>
                <div
                  className='flex items-center justify-center text-center pl-2 pr-1 py-3 bg-gradientTo/15'
                  style={{ background: '#C177FF' }}
                >
                  <span className='pl-1 text-white'>0</span>
                </div>
              </div>
              <span className='flex items-center justify-center text-center'>
                <span className='pl-1 text-white'>:</span>
              </span>
              <div className='flex gap-1'>
                <div
                  className='flex items-center justify-center text-center pl-2 pr-1 py-3 bg-gradientTo/15'
                  style={{ background: '#C177FF' }}
                >
                  <span className='pl-1 text-white'>
                    {timer.toString().length > 1 ? timer.toString()[0] : '0'}
                  </span>
                </div>
                <div
                  className='flex items-center justify-center text-center pl-2 pr-1 py-3 bg-gradientTo/15'
                  style={{ background: '#C177FF' }}
                >
                  <span className='pl-1 text-white'>
                    {timer.toString().length > 1
                      ? timer.toString()[1]
                      : timer.toString()[0]}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/*quiz*/}
        {Boolean(questions.length) && (
          <div
            className='mt-[15px] flex flex-col gap-[64px] '
            style={{
              background: '#FFFFFFB2',
              padding: '64px',
              borderRadius: '64px',
            }}
          >
            {/*quiz-header*/}
            <div className='flex flex-col gap-4'>
              {/* <div className='font-bold text-black text-[32px] text-center'>
                {currentQuestion + 1}/5
              </div> */}
              <div className='title text-center text-[72px] font-moscow'>
                Прослушайте Звук
              </div>
              <div
                className='text-center w-[705px] mx-auto text-2xl'
                style={{ color: '#010037' }}
              >
                Прослушайте звуковую дорожку и выберите один из предложенных
                вариантов, соответствующий верному источнику звука
              </div>
              <div style={{ margin: 'auto' }}>
                <Image
                  src='/images/main/Play.svg'
                  alt='logo'
                  width={112}
                  height={112}
                />
              </div>
            </div>
            {/*  quiz-body*/}
            {questions[currentQuestion].type === 'string' ? (
              <div className='flex flex-col gap-6'>
                {questions[currentQuestion].answers.map((answer) => {
                  return (
                    <div
                      onClick={() => onClickAnswer(answer)}
                      key={answer.id}
                      className={cn(
                        'h-[93px] px-14 py-2 flex items-center border-2 text-2xl',
                      )}
                      style={{
                        border: 'none',
                        color:
                          selectedAnswer?.id === answer.id
                            ? '#FFFFFF'
                            : '#010037',
                        background:
                          selectedAnswer?.id === answer.id
                            ? '#9D28FF'
                            : '#FFFFFF99',
                        borderRadius: '24px',
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                      }}
                    >
                      {answer.title}
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className='grid grid-cols-2 gap-6'>
                {questions[currentQuestion].answers.map((answer) => {
                  return (
                    <div
                      onClick={() => onClickAnswer(answer)}
                      key={answer.id}
                      className={cn(
                        'px-10 py-5 flex border-2 text-xl  flex-col gap-3',
                        selectedAnswer?.id === answer.id &&
                          'bg-gradientTo/40 border-gradientTo/40',
                      )}
                      style={{
                        color:
                          selectedAnswer?.id === answer.id
                            ? '#FFFFFF'
                            : '#010037',
                        background:
                          selectedAnswer?.id === answer.id
                            ? '#9D28FF'
                            : '#FFFFFF99',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '24px',
                        textAlign: 'center',
                      }}
                    >
                      <Image
                        src={answer.img!}
                        alt='image'
                        width={332}
                        height={158}
                        style={{ maxHeight: '158px', borderRadius: '12px' }}
                      />
                      {answer.title}
                    </div>
                  )
                })}
              </div>
            )}

            {/*  quiz-actions*/}
            <div className='flex gap-8'>
              <Button
                onClick={onClickEnd}
                variant='outline'
                style={{
                  border: '#9D28FF solid 4px',
                  borderRadius: '24px',
                  color: '#9D28FF',
                }}
              >
                Завершить
              </Button>
              <Button
                onClick={onClickToAnswer}
                disabled={!Boolean(selectedAnswer)}
                style={{ borderRadius: '24px' }}
              >
                Ответить
              </Button>
            </div>
          </div>
        )}

        <FooterLogo width={1082} height={168} />
        <Dialog open={isShowModal}>
          <DialogContent className='outline-none' style={{borderRadius: '64px', width: '600px', height: "545px"}}>
            <DialogTitle className='hidden'>Следующий вопрос</DialogTitle>
            <DialogDescription className='hidden'></DialogDescription>
            {isCorrect ? (
              <>
                <Image
                  src='/images/quiz/check.svg'
                  alt='check'
                  width={90}
                  height={100}
                />
                <div className='font-moscow text-[72px] title text-center'>
                  верно
                </div>
              </>
            ) : (
              <>
                <Image
                  src='/images/quiz/fail.svg'
                  alt='check'
                  width={74}
                  height={96}
                />
                <div className='font-moscow text-[72px] title text-center'>
                  неверно
                </div>
              </>
            )}

            <Button onClick={onClickNext} style={{borderRadius: "24px", width: "205px", height: "77px"}}>далее</Button>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}
