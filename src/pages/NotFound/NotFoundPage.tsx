import { Link } from "react-router-dom"


export function NotFoundPage(){
    return(
        <div className="not-found-page main-container">
            <main>
                <h1>404 – Page Not Found</h1>
                <p>The page you’re looking for doesn’t exist.</p>

                <Link to="/">
                    Go back home
                </Link>
            </main>
        </div>
    )
}