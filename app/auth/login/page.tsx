import { LoginForm } from "@modules/auth";
import { Space } from "@shared/ui/space";




export default function LoginPage() {
    return (
        <Space 
            as="section" 
            justify="center" 
            align="center" 
            fullWidth 
            fullScreenHeight
        >
            {/* <Container> */}
                <LoginForm />
            {/* </Container> */}
        </Space>
    );
}