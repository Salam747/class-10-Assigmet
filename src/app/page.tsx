
import  Chiled  from './Chiled'
import Button from './button'

export const Page = () => {
  return (
    <div>
      
        <Chiled/>
        <Button bTn="Login"/>
        <Button bTn="SignUp"/>
        <Button className="bg-blue-500 text-white" bTn="Subbmit"/>
    
    </div>
  )
}
export default Page