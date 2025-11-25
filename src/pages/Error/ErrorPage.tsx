import {
  isRouteErrorResponse,
  useRouteError,
  Link,
} from "react-router-dom"

export function ErrorPage(){
    const error = useRouteError()
    console.error(error)

    let message = "Something went wrong."

    if (isRouteErrorResponse(error)) {
        message = `${error.status} - ${error.statusText}`
    }

    return (
        <div className="error-page main-container">
            <main>
                <h1>Oops!</h1>
                <p>{message}</p>

                <Link to="/" className="back-home-btn">
                    Return Home
                </Link>
            </main>
        </div>
    )
}