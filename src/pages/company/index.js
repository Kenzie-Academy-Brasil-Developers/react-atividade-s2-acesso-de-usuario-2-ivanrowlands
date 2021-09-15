import { useParams } from "react-router-dom";
import { members } from "../../components/members";
import { Link } from "react-router-dom";

export default function Company() {
    const params = useParams();
    
    const member = members.find((el) => params.id === el.id)

    return (
        <>
            <div>
                <h1>Detalhes da Empresa</h1>

                <p>
                    Nome da empresa: {member && member.name}
                </p>

                <Link to="/">Voltar</Link>
            </div>
        </>
    )
    
}