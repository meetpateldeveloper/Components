import Button from '../components/Button';
import { CiLinkedin,CiLocationOn,CiPhone } from "react-icons/ci";

function ButtonPage(){
    return <div>
        <div>
        <Button secondary primary><CiLinkedin/>Meet</Button>
        </div>        
        <div>
        <Button primary rounded><CiLocationOn/>Zalak</Button>
        </div>     
        <div>
        <Button outline warning ><CiPhone/>Vipul</Button>
        </div>  
        <div>
        <Button>Smita</Button>
        </div>  
    </div>
};

export default ButtonPage;