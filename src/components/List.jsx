import { FaTrash} from 'react-icons/fa6'
import '../App.css'
const List = ({ people, deletePerson }) => {
    console.log('people' , people);
  return (
      <div>
          { people &&
              people.map((person) => {
                  const{id, name, age , image}=person
                  return (
                      <li key={id} className='text-start mb-2'>
                          <div className='flex items-center gap-4'>
                              <img className=' object-cover rounded-full w-[70px] h-[70px]' src={image} alt="" />
                              <div className='mr-auto'>
                                  
                              <h3>{name}</h3>
                                  <p className='text-[#64748b]'>{`${age} years `}</p>
                              </div>
                              <FaTrash className='text-red-400 text-2xl cursor-pointer hover:text-3xl duration-100' onClick={()=> deletePerson(id)} />
                              
                              
                                  
                          </div>
                      </li>
                  )
              })
          }
    </div>
  )
}

export default List