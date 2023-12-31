import './feeds.css'

//componemnets
import Feed from './Feed'

//.....fakeApi
import HomeFeedData  from '../../FackApis/HomeFeedData'

export default function Feeds() {
  return (
    <div className='feeds'> 
       {
        HomeFeedData.map(fed=>(
         <Feed fed={fed} key={fed.key} />
        ))
       }
    </div>
  )
}
