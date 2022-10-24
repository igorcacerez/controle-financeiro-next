import HeadNext from "next/head"
import {useRouter} from "next/router";

const Head = ({title, description, children}) => {

    const router = useRouter();

    return (
        <>
            <HeadNext>
                <title>{title}</title>
                {description && <meta name="description" content={description}/>}
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charSet="utf-8"/>
                <meta property="og:locale" content="pt_BR"/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content={title}/>
                <meta property="og:url" content={router.pathname} />
                <meta property="og:site_name" content="Vista Sites - Painel Administrativo"/>
                <link rel="shortcut icon" href="/assets/painel/img/favicon.png" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"/>
                {children}
            </HeadNext>
        </>
    )
}

export default Head;