import React, { useState } from 'react'
import data from '../data.json'
import { Switch, Case } from '@usmangurowa/react-switch'

const Home = () => {
  const [user, setUser] = useState('')

  const handleChangeContent = (text) => {
    setUser(text)
  }
  console.log(data)

  return (
    <section className='text-lg text-center border border-solid border-white p-2 w-80 rounded-md bg-white'>
      <article>
        <div className='flex gap-3'>
          {data.map((item) => {
            return (
              <div className='border border-solid border-blueShade w-7 rounded-full bg-blueShade text-white cursor-pointer'>
                <p onClick={() => handleChangeContent(item.content)}>
                  {item.id}
                </p>
              </div>
            )
          })}
        </div>
        <section className='text-justify mt-3 text-sm'>
          <div>
            {data.map((item) => {
              return (
                <Switch case={user}>
                  <Case when={item.content}>
                    <p>{item.content}</p>
                  </Case>
                </Switch>
              )
            })}
          </div>
        </section>
      </article>
    </section>
  )
}

export default Home
