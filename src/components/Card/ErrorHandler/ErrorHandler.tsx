import "./ErrorHandler.css";

type ErrorProps = {
    error: string | undefined;
}

function ErrorHandler({error}: ErrorProps) {
    return (
        error ? (
            <div className="error-handler">
                <span>{error}</span>
            </div>
        ) : null
    )
}

export default ErrorHandler;