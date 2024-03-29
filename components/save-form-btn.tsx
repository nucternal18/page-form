import React from 'react'
import { Button } from './ui/button'
import { HiSave } from 'react-icons/hi'

export default function SaveFormBtn() {
  return <Button variant={'outline'} className='gap-2'>
    <HiSave className="h-6 w-6"/>
    Save
  </Button>
}
