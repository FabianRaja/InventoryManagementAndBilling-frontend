import BasePage from "../Components/BasePage";
import LoginForm from "../Components/LoginForm";

export default function LoginPage(){
    return(
        <div className="login-page-section">
            <BasePage>
               <LoginForm/>
            </BasePage>
        </div>
    )
}