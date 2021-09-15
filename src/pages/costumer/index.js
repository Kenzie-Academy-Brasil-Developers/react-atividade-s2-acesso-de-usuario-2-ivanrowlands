import { useParams } from "react-router-dom";
import { members } from "../../components/members";
import { Link } from "react-router-dom";

export default function Costumer() {
    const params = useParams();
    
    const member = members.find((el) => params.id === el.id)

    return (
        <>
            <div>
                <h1>Detalhes do cliente</h1>

                <p>
                    Nome: {member && member.name}
                </p>

                <Link to="/">Voltar</Link>
            </div>
        </>
    )
    
}