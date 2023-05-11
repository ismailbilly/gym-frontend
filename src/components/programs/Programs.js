import Card from './Card'
import {GiRunningShoe, GiWeightLiftingUp} from 'react-icons/gi'
import {IoMdFitness} from 'react-icons/io'
const Programs = () => {
  return (
    <div className='px-12'>
        <div className='flex justify-center  gap-4 text-5xl uppercase mb-10'>
            <span className="stroke-text">explore our</span>
            <span>programs</span>
            <span className="stroke-text">to shape you</span>
        </div>
          <div className="cards flex justify-between gap-4 mt-4">
          <Card color='#000080'/> 
          <Card  Icon={<GiRunningShoe/>}/> 
          <Card bg='#e4b333' Icon={<IoMdFitness/>}/> 
          <Card  Icon={<GiWeightLiftingUp/>}/> 
          </div>
        
    </div>
  )
}

export default Programs