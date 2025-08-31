import { easeIn, motion } from "motion/react"
import temphoto from  "../../assets/officeimage/happy.jpg"
import happy from "../../assets/officeimage/office.jpg"
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
 <div className='flex-1'>
       < motion.img 
       animate={{y:[50,100,50]}}
       transition={{duration:5,  repeat:Infinity}}
      src={happy}
      className="w-48 rounded-t-[40px] border-l-6  border-blue-600 border-b-8 rounded-br-[40px] shadow-2xl"
    />
       < motion.img 
       animate={{x:[100,150,100]}}
       transition={{duration:5, delay:5,  repeat:Infinity}}
      src={temphoto}
      className="w-48 rounded-t-[40px]  border-l-6 border-blue-600 border-b-8 rounded-br-[40px] shadow-2xl"
    />
 </div>
    <div className='flex-1'>
      < motion.h1
animate={{x:50,color:['green']}}
transition={{duration:2,delay:1,ease:easeIn,repeat:Infinity}}
       className="text-5xl font-bold">Latest <motion.span  
       animate={{color:['#e9580f','#0f34e9','#20e90f']}}
       transition={{duration:1.5,repeat:Infinity}}
       >For You</motion.span> !</ motion.h1 >
      <h1 className="text-5xl font-bold">Latest For You !</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;