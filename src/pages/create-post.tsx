import axios from 'axios'
import { useRouter } from 'next/router'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const CreatePage = () => {
  const [ title,setTitle ] = useState('')
  const [ category,setCategory ] = useState('')
  const [ income, setIncome ] = useState('')
  const router = useRouter()


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log(title, category, income);


    try{
      await axios.post('http://localhost:3001/api/v1/posts', {
        title: title,
        category: category,
        income: income,
      })
      router.push('/')
    }catch(error){
      alert('投稿に失敗しました')
    }
    
  }

  return (
    <div>
      <div>CreatePage</div>

      <form action="" onSubmit={handleSubmit}>
        <input type="text"  onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
        <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)} />
        <input type="text"  onChange={(e: ChangeEvent<HTMLInputElement>) => setIncome(e.target.value)} />
        <button type="submit" >投稿</button>
      </form>
    </div>
  )
}

export default CreatePage