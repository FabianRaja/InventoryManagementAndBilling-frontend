import BasePage from "../Components/BasePage";
import RegisterForm from "../Components/RegisterForm";

export default function RegisterPage(){
    return(
        <div className="register-page-section">
            <BasePage>
               <RegisterForm/>
            </BasePage>
        </div>
    )
}