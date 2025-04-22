import { useRouteError } from "react-router-dom";

const ErrorComp = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Oops something went wrong</h1>
            <h2>{err.data}</h2>
        </div>
    )
}
export default ErrorComp;