import { Link } from "react-router-dom";

export default function Home({members}) {

 return (
     <>
     {members.map((member, i) => {
         return (
             member.type === 'pj'? (
             <Link to={`/company/${member.id}`}>{member.name}</Link>
             ) : (
                <Link to={`/customer/${member.id}`}>{member.name}</Link>
             ) 
         )
     })}
     </>
 )
}

